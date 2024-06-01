import { axios } from "@/common/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Services } from "../types";

export const services = defineStore("services", () => {
  const index = ref(0);
  const list = ref<Services[]>([]);

  const find = async () => {
    await axios
      .get("/service")
      .then((response) => {
        list.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { index, list, find };
});
