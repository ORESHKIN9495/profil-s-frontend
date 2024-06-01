import { axios } from "@/common/axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const bid = defineStore("bid", () => {
  const data = ref({
    fullName: "",
    description: "",
    email: "",
    phone: ""
  });

  const create = async (data: any) => {
    await axios.post("/bid", data);
  };

  const show = ref(false);

  return { create, data, show };
});
