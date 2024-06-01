<script setup lang="ts">
import BreadCrumbsComponent from "@/components/BreadCrumbsComponent.vue";
import FooterSectionComponent from "@/components/FooterSectionComponent.vue";
</script>

<template>
  <section>
    <article>
      <BreadCrumbsComponent crumb="О компании профиль-с" />

      <h1>О компании</h1>

      <p>
        Благодаря налаженным связям с металлургическими заводами России, «Профиль С» имеет возможность осуществлять поставки по рыночным ценам, в разумные сроки, в любой уголок РФ,
        минимальной партией от одной тонны.
      </p>
    </article>

    <FooterSectionComponent />
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: rgb(35, 37, 45);
  padding: clamp(48px, 5vw, 120px) clamp(24px, 2vw, 48px) 0;

  article {
    color: rgb(var(--color-light));
    margin: auto auto clamp(24px, 5vw, 48px);
    max-width: 1200px;

    h1 {
      font-size: clamp(24px, 4vw, 82px);
      text-transform: uppercase;
    }

    p {
      margin: 24px 0 0;
    }
  }
}
</style>
