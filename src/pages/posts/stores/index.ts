import { axios } from "@/common/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Post } from "../types";

export const posts = defineStore("posts", () => {
  const index = ref(0);

  const list = ref<Post[]>([]);

  const listOne = ref<Post>();

  const filter = ref(0);

  const find = async () => {
    await axios
      .get("/post")
      .then((response) => {
        list.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const findOne = async (id: string) => {
    await axios
      .get(`/post/${id}`)
      .then((response) => {
        listOne.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { index, list, find, listOne, findOne, filter };
});
