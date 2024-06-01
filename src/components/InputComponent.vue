<script setup lang="ts">
import { errors } from "@/composables/errors";

interface Input {
  k: string;
  name: string;
  type: "text" | "email" | "tel";
}

const props = defineProps<Input>();
const model = defineModel<any>();
</script>

<template>
  <label :class="{ error: errors[props.k] }">
    {{ props.name }}

    <input :type="props.type" v-model="model" />

    <span v-if="errors[props.k]" v-text="errors[props.k]" />
  </label>
</template>

<style scoped lang="scss">
label {
  &.error {
    input {
      animation: shake 0.5s ease-in-out 1;
      border-color: tomato;

      @keyframes shake {
        0% {
          transform: translateX(0);
        }
        25% {
          transform: translateX(5px);
        }
        50% {
          transform: translateX(-5px);
        }
        75% {
          transform: translateX(5px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    span {
      color: initial;
      display: block;
      font-size: 14px;
    }
  }
}
</style>
