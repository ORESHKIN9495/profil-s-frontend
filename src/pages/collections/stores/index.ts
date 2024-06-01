import { axios } from "@/common/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Category, Product } from "../types";

export const collections = defineStore("collections", () => {
  const index = ref(0);

  const list = ref<Product[]>([]);

  const listOne = ref<Product>();

  const listCategory = ref<Category[]>([]);

  const data = ref({
    fullName: "",
    description: "",
    email: "",
    phone: ""
  });

  const create = async (data: any) => {
    await axios.post("/bid", data);
  };

  const find = async () => {
    await axios
      .get("/product")
      .then((response) => {
        list.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const findOne = async (id: string) => {
    await axios
      .get(`/product/${id}`)
      .then((response) => {
        listOne.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const findCategory = async () => {
    await axios
      .get("/product/category")
      .then((response) => {
        listCategory.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { index, list, find, listOne, findOne, listCategory, findCategory, data, create };
});
