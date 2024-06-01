<script setup lang="ts">
import InputComponent from "@/components/InputComponent.vue";
import { setErrors } from "@/composables/errors";
import { Protector, isEmail, isPhone, minLength } from "@/composables/validates";
import { bid } from "@/stores/bid";
import { root } from "@/stores/index";
import PhoneComponent from "./PhoneComponent.vue";

const state = root();
const store = bid();

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
  store.create(store.data);

  store.data = {
    fullName: "",
    email: "",
    phone: "",
    description: ""
  };

  state.notification = true;
};
</script>

<template>
  <form v-on:submit.prevent="prepareSubmit">
    <h2 class="heading">Связаться с нами</h2>

    <p>Оставьте свои контакты, мы с вами свяжемся и поможем подобрать оптимальное решение для вас</p>

    <InputComponent name="ФИО" type="text" k="fullName" v-model="store.data.fullName" />

    <label>
      Коментарий
      <textarea v-model="store.data.description"></textarea>
    </label>

    <InputComponent name="Эл.почта" k="email" type="text" v-model="store.data.email" />

    <InputComponent name="Телефон" k="phone" type="tel" v-model="store.data.phone" />

    <button class="button" type="submit">Отправить</button>

    <p>Вы можете позвонить нам. Звонки по России бесплатны <PhoneComponent /></p>
  </form>
</template>

<style scoped lang="scss">
form {
  background-color: rgb(var(--color-light));
  display: grid;
  grid-template: auto / repeat(2, 1fr);
  gap: 20px;
  padding: 48px clamp(24px, 2vw, 48px);

  h2 {
    grid-column: 1 / -1;
  }

  svg {
    cursor: pointer;
    grid-column: 1 / -1;
    margin: 0 0 0 auto;
  }

  p {
    grid-column: 1 / -1;
    margin: 0 0 40px;

    &:last-of-type {
      margin: 0;
    }
  }

  label {
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
    margin: 0 0 40px;
  }
}

@media only screen and (max-width: 720px) {
  form {
    grid-template: auto / auto;
  }
}
</style>
@/stores/formBid
