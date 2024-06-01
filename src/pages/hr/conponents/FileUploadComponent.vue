<script lang="ts" setup>
import useFile from "@/composables/files";
// import { useUpload } from '@/stores/useUpload';
import type { File } from "@/types/file";

import { ref } from "vue";
import { hr } from "../stores";

const store = hr();

const extension = ref("");

// getting the endpoint from our environment
const api: string = import.meta.env.VITE_HTTP;

interface Props {
  filename?: string;
}

interface Emits {
  (event: "update:file", file: string): void;
}

// forming a file object
const { file, prepareFile }: { file: File; prepareFile: (event: any) => void } = useFile();

// waiting for the props
const props = defineProps<Props>();

// define the event for which we will return the generated data
const emits = defineEmits<Emits>();

// preparing the data to be sent
const prepareFormData = (file: File): FormData => {
  // define the form data
  let formData = new FormData();

  // append the file to the form data with its name and type
  formData.append("file", file.body, `${file.name}.${file.type.toLowerCase()}`);

  return formData;
};

// preparing the file
const prepareUpload = (event: any): void => {
  // pass the event to the handler to generate the file
  prepareFile(event);

  // pass the file to prepare the form data
  let formData = prepareFormData(file);

  // send the file using the store
  // store.upload(formData);

  // emit an update event for the file name without the extension
  emits("update:file", file.name);
};
</script>

<template>
  <label v-on:change="prepareUpload">
    <picture v-if="file.type === 'jpeg' || file.type === 'png' || file.type === 'jpg'">
      <img v-if="file.blob || props.filename" :src="file.blob !== '' ? file.blob : `${api}/out/${props.filename}.webp`" :alt="props.filename" />
    </picture>

    <p v-if="file.type === 'doc' || file.type === 'pdf' || file.type === 'docx'">
      {{ file.body.name }}

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path
          d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h3v2zm4 0v-2h3v1a1 1 0 0 1-1 1zm3-3h-3v-2h3zm-7 0v-2h3v2z"
        />
      </svg>
    </p>

    <p v-if="!file.body">
      Прикрепить файл

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path
          d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h3v2zm4 0v-2h3v1a1 1 0 0 1-1 1zm3-3h-3v-2h3zm-7 0v-2h3v2z"
        />
      </svg>
    </p>

    <input name="file" type="file" accept=".pdf, .doc, .docx, .jpg, .jpeg, .png" />
  </label>
</template>

<style lang="scss" scoped>
label {
  border: 1px dashed #cccccc;
  cursor: pointer;
  grid-column: 1 / -1;
  grid-template: unset !important;
  height: fit-content;
  place-items: center;

  &:hover {
    background-color: rgba(var(--color-theme), 0.3);
  }

  picture {
    width: 100%;

    img {
      display: block;
      height: 250px;
      object-fit: cover;
      width: 100%;
    }
  }

  p {
    padding: 80px;

    svg {
      margin: 0 0 0 24px;
    }
  }

  input {
    display: none;
  }
}
</style>
