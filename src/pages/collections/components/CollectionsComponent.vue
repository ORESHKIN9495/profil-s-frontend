<script setup lang="ts">
import DocComponent from "@/components/DocComponent.vue";
import { computed, onMounted } from "vue";
import { collections } from "../stores";
import CardComponent from "./CardComponent.vue";

const store = collections();
store.find();

const count = (id: number) => computed(() => store.list.filter((e) => e.category.id === id && e.published));

onMounted(() => (store.index = 0));
</script>

<template>
  <section>
    <DocComponent tittle="Скачайте каталог нашей продукции" name="Каталог продукции" href="https://api.profilss.com/doc/Профиль-С прайс-лист 2024.xlsx" />

    <p>
      Наше предприятие растет, и мы регулярно увеличиваем географию наших поставок: постепенно к партнерам из Волгограда и Волгоградской области прибавились клиенты из Краснодара и
      Хабаровска, из Омска и Брянска.
    </p>

    <p>
      На сегодняшний день мы осуществляем доставку наземным транспортом в большинство крупных городов и районных центров Российской Федерации. Наработанный опыт позволяет
      разрабатывать наиболее выгодную для каждого клиента логистическую схему, предлагать оптимальную упаковку продукции и с минимальной погрешностью определять сроки поставки.
    </p>

    <div v-for="el of store.listCategory.filter((el) => (el.id === store.index && el.published) || (store.index === 0 && count(el.id as number).value.length > 0))" :key="el.id">
      <h4 v-text="el.name" />

      <CardComponent v-for="list of store.list.filter((e) => e.category.id === el.id && e.published)" :key="list.id" :data="list" />
    </div>

    <p>
      Бизнес расширяется, а наша компания остается сплоченной командой людей, радеющих за свое дело. Мы регулярно развиваемся и повышаем квалификацию своих сотрудников. Особое
      внимание в нерабочее время мы уделяем спорту: соревнования по футболу, хоккею, дартс, как нельзя лучше помогают почувствовать командный дух в компании. Стремление к новым
      достижениям, спортивный азарт сделать свою работу еще лучше и качественнее, спокойная рассудительность в принятии решений и удовольствие работать в коллективе хороших людей и
      для хороших людей – таковы основные характеристики команды «Профиль С».
    </p>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: rgb(var(--color-light));
  display: grid;
  gap: 48px;
  padding: clamp(48px, 5vw, 120px) clamp(24px, 2vw, 48px);

  div {
    display: grid;
    grid-template: auto / repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;

    h4 {
      grid-column: 1 / -1;
    }
  }

  p {
    max-width: 1120px;
    text-align: justify;
  }
}
</style>
