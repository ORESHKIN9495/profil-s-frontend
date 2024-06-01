<script setup lang="ts">
import FooterSectionComponent from "@/components/FooterSectionComponent.vue";
import { WheelSlideSwitcher } from "@/composables/scrolling";
import { onMounted, ref, watchEffect } from "vue";
import AdvantagesComponent from "../components/AdvantagesComponent.vue";
import SliderComponent from "../components/SliderComponent.vue";
import { home } from "../stores";

const store = home();
const array = ref([]);

onMounted(() => {
  new WheelSlideSwitcher("#home", ".panel");
  array.value = Array.from(document.querySelectorAll(".hero_video"));
});

watchEffect(() => array.value.forEach((video: HTMLVideoElement, index) => (index === store.index ? video.play() : video.pause())));
</script>

<template>
  <main id="home">
    <SliderComponent />

    <section class="panel">
      <article>
        <video class="hero_video" src="@/assets/video/a.mp4" muted autoplay loop></video>
      </article>

      <article>
        <h1>
          Трубы -<br />
          наш <span>профиль</span>
        </h1>
      </article>

      <AdvantagesComponent />

      <FooterSectionComponent />
    </section>

    <section class="panel">
      <article>
        <video class="hero_video" src="@/assets/video/b.mp4" muted autoplay loop></video>
      </article>

      <article>
        <h2>Производство</h2>
        <p>Выпускаем более 1 000 наименований металлоконструкций на ваш выбор</p>

        <RouterLink class="link" :to="{ name: 'collections' }">Перейти в каталог <span>⸻</span></RouterLink>
      </article>

      <FooterSectionComponent />
    </section>

    <section class="panel">
      <article>
        <video class="hero_video" src="@/assets/video/c.mp4" muted autoplay loop></video>
      </article>

      <article>
        <h2>Проектирование</h2>
        <p>Разрабатываем проектную документацию на строительство предприятий</p>

        <RouterLink class="link" :to="{ name: 'home' }">Подробнее <span>⸻</span></RouterLink>
      </article>

      <FooterSectionComponent />
    </section>

    <section class="panel">
      <article>
        <video></video>
      </article>

      <article>
        <h2>Строительство</h2>
        <p>Осуществляем весь комплекс строительно-монтажных работ: от земляных до отделочных, все работы по монтажу и технологического оборудования</p>

        <RouterLink class="link" :to="{ name: 'home' }">Наши объекты <span>⸻</span></RouterLink>
      </article>

      <FooterSectionComponent />
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  color: rgb(var(--color-light));

  div {
    z-index: 1;
  }

  section {
    background-color: rgb(35, 37, 45);
    display: grid;
    gap: 24px;
    grid-template: 1fr / auto;
    height: 100vh;
    padding: 0 clamp(24px, 2vw, 48px);
    place-items: center baseline;
    position: relative;

    h1 {
      font-size: clamp(32px, 4vw, 82px);
      text-transform: uppercase;

      span {
        color: rgb(var(--color-theme));
      }
    }

    article {
      display: grid;
      gap: 24px;
      z-index: 1;

      h2 {
        font-size: clamp(28px, 4vw, 82px);
        text-transform: uppercase;
      }

      p {
        max-width: 900px;
        margin: 0 100px 0 0;
      }

      &:first-of-type {
        inset: 0;
        opacity: 0.1;
        position: absolute;

        video {
          height: 100%;
          object-fit: cover;
          width: 100%;
        }
      }
    }

    footer {
      z-index: 1;
    }
  }
}

@media only screen and (max-width: 720px) {
  main {
    section {
      article {
        p {
          margin: 0;
        }
      }

      &:first-of-type {
        article {
          &:nth-of-type(2) {
            margin: 92px 0 0;
          }
        }
      }
    }
  }
}
</style>
