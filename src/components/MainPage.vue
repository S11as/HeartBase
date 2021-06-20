<template>
  <div class="container" :class="styles.wrapper">
    <div class="row">
      <div class="col-auto">
        <Chart :index="current.value"/>
      </div>
      <Slider v-if="active" @slide="slide"/>
      <div class="col container pt-5 pb-5" id="hero" :class="styles.title" v-else>
        <div class="row">
          <h1 class="col">
            Проверьте свой сердечный ритм на признаки COVID19 и других середечных заболеваний
          </h1>
        </div>
        <div class="row">
          <h2 class="col">
            Диагностика еще никогда не была так проста
          </h2>
        </div>
        <div class="row mt-4" :class="styles.moreWrapper">
          <button class="col-auto" :class="[styles.buttonHero, styles.buttonPrimary]" @click="startAnimation">
            Загрузить диаграмму
          </button>
          <div class="col-auto d-flex align-items-center">
            <router-link class="col-auto" to="/about" :class="[styles.link, styles.linkMore]">
              Узнать больше <i class="fal fa-long-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Statistics :active="active"/>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
import styles from "./MainPage.module.sass";
import Statistics from "@/components/Statistics";
import Slider from "@/components/Slider";
import useAnalysis from "@/components/useAnalysis";
import {ref} from 'vue'
export default {
  name: "main-page",
  components: {
    Chart,
    // eslint-disable-next-line vue/no-unused-components
    Slider,
    Statistics
  },
  setup() {
    let active = ref(false);
    let current = ref(1);
    const startAnimation = function (){
      active.value = true
      useAnalysis()
    }
    const slide = function (data){
      console.log("current", data)
      current.value = data
    }
    return {
      active,
      slide,
      startAnimation,
      styles,
      current
    }
  }
}
</script>

<style scoped>

</style>
