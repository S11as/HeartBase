<template>
  <div class ="col" :class="styles.wrapper">
      <div class="row justify-content-between mt-5">
        <div class="col-auto" :class="styles.text">
          Подозрительный случай:
        </div>
        <div class="col-auto" :class="styles.text">
          {{current}}/{{bad}}
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <input type="range" min="1" max="100" v-model="current" @change="upd" :class="styles.slider" id="myRange">
        </div>
      </div>
  </div>
</template>

<script>
import styles from "./Slider.module.sass"
import {ref} from "vue"
import {mapState} from 'vuex'
import {UPDATE_CHART} from "@/store/types"
import store from "@/store/store";
export default {
  name: "Slider",
  props:{
    min: [Number],
    max: [Number],
  },
  computed: {
    ...mapState({
      bad: state=>state.statistics.covid
    })
  },
  setup() {
    let current = ref(55)
    function upd(){
      store.commit(UPDATE_CHART, current.value)
    }
    return {
      styles,
      current,
      upd
    }
  }
}
</script>

<style scoped>

</style>
