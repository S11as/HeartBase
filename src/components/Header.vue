<template>
  <header class="container-fluid">
    <div class="row justify-content-between" :class="styles.wrapper">
      <div class="col-auto" :class="styles.logo">Heart Base</div>
      <nav class="col" :class="styles.navigation">
        <div class="row justify-content-end">
          <router-link to="/" class="col-auto" :class="styles.headerLink">Главная</router-link>
          <router-link to="/about" class="col-auto" :class="styles.headerLink">Как это работает?</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import styles from "./Header.module.sass"

export default {
  name: "Header",
  setup() {
    return {
      styles
    }
  }
}
</script>
