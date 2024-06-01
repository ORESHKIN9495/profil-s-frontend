<script setup lang="ts"></script>

<template>
  <section>
    <h2 class="heading">
      Преимущества<br />
      работы с нами
    </h2>

    <article class="card">
      <picture> </picture>

      <h3>Доставка по РФ</h3>
      <p>Благодаря налаженной транспортной сети, мы готовы доставить продукцию в любой регион России.</p>
    </article>

    <article class="card">
      <picture> </picture>

      <h3>18 лет на рынке</h3>
      <p>Компания «Профиль С» уже 18 лет занимается поставками стальных труб.</p>
    </article>

    <article class="card">
      <picture> </picture>

      <h3>Контроль качества</h3>
      <p>Мы следим за качеством продукции. От производителя, до отгрузки нашим клиентам.</p>
    </article>

    <article class="card">
      <picture> </picture>

      <h3>Доставляем точно в срок</h3>
      <p>Мы понимаем, как иногда важно получить груз в кратчайшие сроки не дожидаясь окончания выходных.</p>
    </article>

    <article class="card">
      <picture> </picture>

      <h3>Мы работаем открыто</h3>
      <p>Мы работаем открыто – вы платите за продукцию ее цену без дополнительных процентов. И это по-настоящему выгодно!</p>
    </article>
  </section>
</template>

<style scoped lang="scss">
section {
  display: grid;
  grid-template: auto / repeat(2, 1fr);
  gap: 48px;
  margin: auto;
  max-width: 1200px;
  padding: 48px clamp(24px, 2vw, 48px);

  article {
    padding: 24px;

    h3 {
      margin: 12px 0;
    }

    picture {
      background-color: rgb(var(--color-theme));
      display: block;
      min-height: 150px;
    }

    p {
      opacity: 0.6;
    }
  }
}

@media only screen and (max-width: 720px) {
  section {
    grid-template: auto / auto;
  }
}
</style>
