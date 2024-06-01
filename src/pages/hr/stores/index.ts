import { axios } from "@/common/axios";
import { setErrors } from "@/composables/errors";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Vacancy } from "../types";

export const hr = defineStore("hr", () => {
  const list = ref<Vacancy[]>([]);

  const listOne = ref<Vacancy>();

  const index = ref(0);

  const stateModal = ref(false);
  const resolution = ref(false);

  const find = async () => {
    await axios
      .get("/hr")
      .then((response) => {
        list.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const findOne = async (id: string) => {
    await axios
      .get(`/hr/${id}`)
      .then((response) => {
        listOne.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const data = ref({
    fullName: "",
    description: "",
    email: "",
    phone: ""
  });

  const create = async (data: any) => {
    await axios.post("/bid", data);
  };

  const upload = (data: any) => {
    axios
      .post("/doc", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(() => {})
      .catch((error) => setErrors({ error: error }));
  };

  return { list, find, index, data, create, upload, stateModal, listOne, findOne, resolution };
});
