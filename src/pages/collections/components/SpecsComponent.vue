<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  data: Object
});

const array = ref([
  { title: "Характеристики", value: props.data?.typesize },
  { title: "Описание", value: props.data?.description },
  { title: "Где применяется", value: props.data?.adv }
]);

const index = ref(0);
</script>

<template>
  <article>
    <h4 :class="{ active: index === idx }" v-for="(el, idx) of array" :key="idx" v-on:click="index = idx" v-text="el.title" />

    <p>
      Основным преимуществом плоскоовальных труб является их несравненная гибкость. Сохраняя внутренний объем и форму, стальная труба способна гнуться так, как требуется
      производителю. А потому продукция, приобретенная у «Профиль С», применяется мебельными цехами, изготовителями рабочих инструментов, бытовой техники. Используется она и для
      выпуска спортивного оборудования, в машиностроении (для создания опорных и защитных элементов автомобилей). Множество современных радиаторов отопления, а также дизайнерские
      интерьерные конструкции делают с применением плоскоовальных труб.
    </p>
  </article>
</template>

<style scoped lang="scss">
article {
  grid-template: auto / repeat(3, auto) 1fr;
  grid-column: 1 / -1;
  gap: 48px;

  h4 {
    cursor: pointer;

    &.active {
      border-bottom: 2px solid rgb(var(--color-theme));
      opacity: 1;
      width: fit-content;
    }
  }

  p {
    grid-column: 1 / -1;
  }
}

@media only screen and (max-width: 720px) {
  article {
    &:last-of-type {
      grid-template: auto / auto 1fr;
    }
  }
}
</style>
