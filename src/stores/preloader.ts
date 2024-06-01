import { defineStore } from "pinia";
import { ref } from "vue";

export const preloader = defineStore("preloader", () => {
  const state = ref(false);

  const changeStateTrue = () => (state.value = true);

  const changeStateFalse = () => (state.value = false);

  return { state, changeStateTrue, changeStateFalse };
});
