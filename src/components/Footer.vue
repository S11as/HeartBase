<template>
  <footer class="container-fluid" :class="styles.wrapper">
    <div class="container" :class="styles.wrapperInner">
      <div class="row">
        <div class="col-4">
          <div class="row">
            <div class="col-auto p-0" :class="styles.title">
              Навигация
            </div>
          </div>
          <div class="row">
            <router-link  to="/" class="col-auto" :class="styles.footerLink">
              Главная
            </router-link>
          </div>
          <div class="row">
            <router-link to="/about" class="col-auto" :class="styles.footerLink">
              Как это работает?
            </router-link>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-auto p-0" :class="styles.title">
              Поддержка
            </div>
          </div>
          <div class="row">
            <router-link to="/about" class="col-auto" :class="styles.footerLink">
              Связаться с нами
            </router-link>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-auto p-0" :class="styles.title">
              Социальные сети
            </div>
          </div>
          <div class="row">
            <router-link to="/about" class="col-auto" :class="styles.footerLink">
              Вконтакте
            </router-link>
          </div>
          <div class="row">
            <router-link to="/about" class="col-auto" :class="styles.footerLink">
              Telegram
            </router-link>
          </div>
          <div class="row">
            <router-link to="/about" class="col-auto" :class="styles.footerLink">
              Discord
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col" :class="styles.line"></div>
      </div>
      <div class="row justify-content-center mt-4" :class="styles.rights">
        <div class="col-auto">Heart Base. Все права защищены. © 2021</div>
      </div>
    </div>
  </footer>
</template>

<script>
import styles from "./Footer.module.sass"

export default {
  name: "Footer",
  setup() {
    return {
      styles
    }
  }
}
</script>

<style scoped>

</style>
