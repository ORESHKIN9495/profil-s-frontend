import { defineStore } from "pinia";
import { ref } from "vue";

export const navigate = defineStore("navigate", () => {
  const array = ref([
    { title: "Главная", path: "home" },
    { title: "О компании", path: "about" },
    { title: "Каталог продукции", path: "collections" },
    { title: "Новости", path: "posts" },
    { title: "Контакты", path: "contacts" },
    { title: "Вакансии", path: "hr" }
  ]);

  const index = ref(0);

  return { array, index };
});
