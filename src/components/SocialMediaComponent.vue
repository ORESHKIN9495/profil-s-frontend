<script setup lang="ts">
import { settings } from "@/stores/settings";
import { computed } from "vue";

const store = settings();
const media = computed(() => store.responseData?.media);
</script>

<template>
  <nav v-if="media">
    <a v-for="el of media" :key="el.id" :href="el.href" target="_blank">
      <svg v-if="el.name === 'Вконтакте'" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 16" fill="none">
        <path
          d="M13.0718 15.4878C4.87192 15.4878 0.19489 9.86635 0 0.512207H4.10744C4.24236 7.37789 7.2704 10.2861 9.66887 10.8857V0.512207H13.5366V6.43345C15.9051 6.17862 18.3932 3.48035 19.2327 0.512207H23.1004C22.4558 4.16993 19.7575 6.8682 17.8387 7.97749C19.7575 8.87693 22.8307 11.2305 24 15.4878H19.7425C18.8281 12.6396 16.5497 10.436 13.5366 10.1361V15.4878H13.0718Z"
          fill="#595D63"
        />
      </svg>

      <svg v-if="el.name === 'Телеграм'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <path
          fill="#595D63"
          fill-rule="evenodd"
          d="M2.512 10.849c5.906-2.573 9.844-4.27 11.814-5.089 5.626-2.34 6.795-2.746 7.557-2.76.168-.003.542.039.785.236.205.166.261.39.288.548.027.158.06.517.034.798-.305 3.203-1.624 10.976-2.295 14.564-.284 1.518-.843 2.027-1.384 2.077-1.177.108-2.07-.777-3.21-1.524-1.782-1.169-2.79-1.897-4.52-3.037-2-1.318-.704-2.042.436-3.226.298-.31 5.482-5.025 5.582-5.453.012-.053.024-.252-.094-.358-.119-.105-.294-.069-.42-.04-.179.04-3.027 1.923-8.545 5.648-.808.555-1.54.825-2.197.811-.723-.016-2.114-.409-3.149-.745-1.268-.412-2.276-.63-2.189-1.33.046-.366.548-.739 1.507-1.12Z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </nav>
</template>

<style scoped lang="scss">
nav {
  align-items: center;
  display: flex;
  gap: 28px;

  svg {
    cursor: pointer;

    &:hover {
      path {
        fill: rgb(var(--color-theme));
      }
    }
  }
}
</style>
