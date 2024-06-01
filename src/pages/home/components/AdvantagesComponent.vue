<script setup lang="ts"></script>

<template>
  <article>
    <ol>
      <li><span>20</span> лет</li>
      <li>занимаемся поставками стальных труб</li>
    </ol>

    <ol>
      <li><span>№1</span> на рынке</li>
      <li>по стоимости и качеству металлоконструкции</li>
    </ol>

    <ol>
      <li><span>168</span> часов</li>
      <li>в неделю без перерывов и выходных</li>
    </ol>

    <ol>
      <li><span>350-400 </span> тыс тонн</li>
      <li>поставок ежегодно</li>
    </ol>
  </article>
</template>

<style scoped lang="scss">
article {
  grid-template: auto / repeat(4, 1fr);
  width: 100%;

  ol {
    li {
      &:first-of-type {
        font-size: 20px;
      }

      span {
        font-size: 32px;
      }
    }
  }
}

@media only screen and (max-width: 920px) {
  article {
    grid-template: auto / repeat(2, 1fr);
  }
}

@media only screen and (max-width: 720px) {
  article {
    ol {
      li {
        color: rgba(var(--color-light), 0.6);
        font-size: 16px !important;

        span {
          color: rgb(var(--color-light));
          display: block;
          font-size: 24px;
        }

        &:last-of-type {
          display: none;
        }
      }
    }
  }
}
</style>
