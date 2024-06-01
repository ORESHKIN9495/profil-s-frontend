<script setup lang="ts">
import { settings } from "@/stores/settings";
import { computed } from "vue";

const store = settings();

const contacts = computed(() => store.responseData?.contacts[0]);
</script>

<template>
  <section>
    <h2>{{ store.responseData?.name }}</h2>

    <ol>
      <li>ИНН | КПП</li>

      <li>{{ store.responseData?.inn }} | {{ store.responseData?.kpp }}</li>
    </ol>

    <ol>
      <li>Юридический адрес</li>

      <li>{{ contacts?.address }}</li>
    </ol>

    <ol>
      <li>Банковские реквизиты</li>

      <li>{{ store.responseData?.bank }} | {{ store.responseData?.bik }} | {{ store.responseData?.kor }}</li>
    </ol>

    <ol>
      <li>ОГРН</li>

      <li>{{ store.responseData?.ogrn }}</li>
    </ol>

    <ol>
      <li>ОКВЭД</li>

      <li>{{ store.responseData?.okvd }}</li>
    </ol>

    <ol>
      <li>Директор</li>

      <li>{{ store.responseData?.employees[0].name }}</li>
    </ol>

    <ol>
      <li>Телефон</li>

      <li>{{ contacts?.phone }}</li>
    </ol>

    <ol>
      <li>Эл.почта</li>

      <li>{{ contacts?.email }}</li>
    </ol>

    <ol>
      <li>Сайт</li>

      <li>https://profilss.com</li>
    </ol>

    <button class="button">Скачать карту партнера</button>
  </section>
</template>

<style scoped lang="scss">
section {
  h2 {
    font-size: clamp(18px, 5vw, 24px);
    margin: 0 0 48px;
  }

  ol {
    display: grid;
    grid-template: auto / repeat(2, 1fr);
    gap: 24px;
    margin: 24px 0;
  }

  button {
    margin: 48px 0 0;
    text-align: center;
  }
}

@media only screen and (max-width: 720px) {
  section {
    ol {
      grid-template: auto / auto;
    }
  }
}
</style>
