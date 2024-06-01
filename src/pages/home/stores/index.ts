import { defineStore } from "pinia";
import { ref } from "vue";

export const home = defineStore("home", () => {
  const index = ref(0);

  return { index };
});
