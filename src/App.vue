<template>
  <div class="page">
    <div class="adv">
      <div class="number">Advice #{{ slip.num }}</div>
      <div class="content">"{{ slip.content }}"</div>
      <picture class="divider">
        <source srcset="../images/pattern-divider-desktop.svg" media="(min-width: 1024px)">
        <img src="../images/pattern-divider-mobile.svg">
      </picture>
      <button class="next-btn" @click="nextAdvice">
        <img src="../images/icon-dice.svg">
      </button>
    </div>
  
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/cuishuo0102">cuishuo0102</a>.
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      slip: {
        num: 117,
        content: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
      }
    }
  },
  mounted() {
    this.nextAdvice();
  },
  methods: {
    async nextAdvice() {
      const { slip } = await (await fetch('https://api.adviceslip.com/advice')).json();
      this.slip = { num: slip.id, content: slip.advice };
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&family=Open+Sans&display=swap');
@import "./variables.scss";

body { margin: 0 }

.page {
  height: 100vh;
  background-color: $color-dark-blue;
  padding: 0.05px;

  .adv {
    position: relative;
    width: 492px;
    height: 280px;
    margin: 216px auto;
    padding: 24px;
    background-color: $color-dark-grayish-blue;
    border-radius: 16px;
    font-family: manrope;
    text-align: center;

    @media (max-width: $mobile-s-breakpoint) {
      margin: 120px auto;
      width: 80%;
      height: 264px;
      border-radius: 12px;
    }

    .number {
      padding: 24px 0;
      color: $color-neon-green;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.3em;

      @media (max-width: $mobile-s-breakpoint) {
        padding: 16px 0;
        font-size: 12px;
      }
    }

    .content {
      padding: 0 14px;
      color: $color-light-cyan;
      font-size: 28px;

      @media (max-width: $mobile-s-breakpoint) {
        margin-top: 8px;
        font-size: 24px;
      }
    }

    .divider {
      position: absolute;
      bottom: 64px;
      left: 50%;
      transform: translate(-50%);

      @media (max-width: $mobile-s-breakpoint) {
        margin-top: -12px;
      }
    }

    .next-btn {
      $length: 64px;

      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      width: $length;
      height: $length;
      border: none;
      border-radius: 999px;
      background-color: $color-neon-green;
      cursor: pointer;

      &:hover {
        box-shadow: 0 5px 15px 1px $color-neon-green;
      }

      >img {
        width: 24px;
        display: block;
        margin: auto;
      }
    }
  }
}
</style>
