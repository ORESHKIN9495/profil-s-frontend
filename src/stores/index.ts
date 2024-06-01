import { defineStore } from "pinia";
import { ref } from "vue";

export const root = defineStore("root", () => {
  const stateMenu = ref(false);
  const notification = ref(false);
  const bid_modal = ref(false);
  const partner_card_modal = ref(false);

  return { stateMenu, notification, bid_modal, partner_card_modal };
});
