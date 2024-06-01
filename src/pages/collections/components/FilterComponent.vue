<script setup lang="ts">
import BreadCrumbsComponent from "@/components/BreadCrumbsComponent.vue";
import { computed } from "vue";
import { collections } from "../stores";

const store = collections();

store.findCategory();
store.find();

interface TransformedCategory {
  id: number;
  name: string;
  products_count: number;
}

interface TransformedSubCategory {
  sub_category_name: string;
  categories: TransformedCategory[];
}

const transformedData = computed<TransformedSubCategory[]>(() => {
  const result: Record<string, Record<number, TransformedCategory>> = {};

  store.list.filter((el) => {
    if (el.published) {
      const subCategoryName = el.category.sub_category.name;
      const categoryId = el.category.id;
      const categoryName = el.category.name;

      if (!result[subCategoryName]) {
        result[subCategoryName] = {};
      }

      if (!result[subCategoryName][categoryId as number]) {
        result[subCategoryName][categoryId as number] = { id: categoryId as number, name: categoryName, products_count: 0 };
      }

      result[subCategoryName][categoryId as number].products_count += 1;
    }
  });

  return Object.entries(result).map(([subCategoryName, categoriesById]) => ({
    sub_category_name: subCategoryName,
    categories: Object.values(categoriesById)
  }));
});
</script>

<template>
  <section>
    <article>
      <BreadCrumbsComponent crumb="Каталог продукции" />

      <h1 class="heading">Каталог</h1>
    </article>

    <article>
      <ol v-for="(el, index) of transformedData" :key="index">
        <b v-text="el.sub_category_name" />

        <li v-for="list of el.categories" :key="list.id" v-on:click="store.index = list.id" :class="{ active: list.id === store.index }">
          {{ list?.name }} <span>{{ list.products_count }}</span>
        </li>
      </ol>
    </article>
  </section>
</template>

<style scoped lang="scss">
section {
  inset: 92px 0 0;
  padding: clamp(48px, 5vw, 120px) clamp(24px, 2vw, 48px) 0;
  position: sticky;

  article {
    height: fit-content;

    ol {
      margin: 0 0 24px;

      b {
        font-weight: 600;
      }

      li {
        cursor: pointer;
        margin: 12px 0;
        width: fit-content;

        &:hover {
          color: rgb(var(--color-theme));
        }

        span {
          margin: 0 0 0 5px;
        }

        &.active {
          color: rgb(var(--color-theme));

          span {
            color: rgba(var(--color-theme), 0.5);
          }
        }
      }
    }

    &:last-of-type {
      margin: 48px 0 0;
    }
  }
}

@media only screen and (max-width: 720px) {
  section {
    position: static;
  }
}
</style>
