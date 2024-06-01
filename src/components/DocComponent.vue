<script setup lang="ts">
const props = defineProps({
  tittle: String,
  name: String,
  href: String
});
</script>

<template>
  <span>
    {{ props.tittle }}

    <a :href="props.href" download>
      {{ props.name }}

      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
        <path
          d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h3v2zm4 0v-2h3v1a1 1 0 0 1-1 1zm3-3h-3v-2h3zm-7 0v-2h3v2z"
        />
      </svg>
    </a>
  </span>
</template>

<style scoped lang="scss">
span {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 0 0 0 auto;
  white-space: nowrap;

  a {
    background-color: rgb(var(--color-primary));
    border-radius: var(--theme-radius);
    padding: 12px 24px;

    &:hover {
      color: rgb(var(--color-theme));
    }

    svg {
      vertical-align: text-bottom;
      margin: 0 0 0 12px;
    }
  }
}

@media only screen and (max-width: 720px) {
  span {
    white-space: initial;
  }
}
</style>
