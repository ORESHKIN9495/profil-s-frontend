<script setup lang="ts">
import InputComponent from "@/components/InputComponent.vue";
import PhoneComponent from "@/components/PhoneComponent.vue";
import { setErrors } from "@/composables/errors";
import { Protector, isEmail, isPhone, minLength } from "@/composables/validates";
import { root } from "@/stores/index";
import { ref, watchEffect } from "vue";
import FileUploadComponent from "../conponents/FileUploadComponent.vue";
import { hr } from "../stores";

const state = root();
const store = hr();
const vacancy = ref();

const protector = new Protector(
  {
    fieldName: "email",
    rule: isEmail,
    errorMessage: "Электронная почта должна быть валидной"
  },
  {
    fieldName: "email",
    rule: (value: string) => minLength(value, 5),
    errorMessage: "Электронная почта должна содержать не менее 5 символов"
  },
  {
    fieldName: "fullName",
    rule: (value: string) => minLength(value, 1),
    errorMessage: "Поле не должно быть пустым"
  },
  {
    fieldName: "phone",
    rule: isPhone,
    errorMessage: "Номер телефона должен быть в формате +79999999999"
  }
);

const prepareSubmit = () => {
  const errors = protector.validate(store.data);

  if (Object.keys(errors).length !== 0) {
    setErrors(errors);
    return;
  }
  // store.create(store.data);

  store.data = {
    fullName: "",
    email: "",
    phone: "",
    description: ""
  };

  state.notification = true;
  store.stateModal = false;
};

watchEffect(() => {
  if (vacancy.value && store.stateModal) vacancy.value.showModal();
  if (vacancy.value && !store.stateModal) vacancy.value.close();
});
</script>

<template>
  <dialog ref="vacancy">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(var(--color-theme))" viewBox="0 0 16 16" v-on:click="store.stateModal = false">
      <path
        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
      />
    </svg>

    <form v-on:submit.prevent="prepareSubmit">
      <h2 class="heading">Откликнуться на вакансию</h2>

      <p>Оставьте свои контакты, мы с вами свяжемся и поможем подобрать оптимальное решение для вас</p>

      <InputComponent name="ФИО" type="text" k="fullName" v-model="store.data.fullName" />

      <label>
        Коментарий
        <textarea v-model="store.data.description"></textarea>
      </label>

      <InputComponent name="Эл.почта" k="email" type="text" v-model="store.data.email" />

      <InputComponent name="Телефон" k="phone" type="tel" v-model="store.data.phone" />

      <FileUploadComponent />

      <button class="button" type="submit">Отправить</button>

      <p>Вы можете позвонить нам. Звонки по России бесплатны <PhoneComponent /></p>
    </form>
  </dialog>
</template>

<style scoped lang="scss">
dialog {
  padding: 48px clamp(24px, 13vw, 240px);

  svg {
    cursor: pointer;
    inset: 24px 24px 0 auto;
    position: absolute;
  }

  form {
    display: grid;
    grid-template: auto / repeat(2, 1fr);
    gap: 24px;

    h2 {
      grid-column: 1 / -1;
    }

    p {
      grid-column: 1 / -1;
      margin: 0 0 40px;

      &:last-of-type {
        margin: 0;
      }
    }

    label {
      color: rgb(var(--color-theme));
      display: grid;
      grid-template: auto 1fr / auto;
      gap: 5px;

      &:nth-of-type(2) {
        grid-row: span 3;
      }
    }

    a {
      color: rgb(var(--color-theme));
      display: block;
      font-size: 24px;
    }

    button {
      grid-column: 1 / -1;

      &:last-of-type {
        margin: 0 0 40px;
      }
    }
  }

  @media only screen and (max-width: 720px) {
    form {
      grid-template: auto / auto;
    }
  }
}
</style>
