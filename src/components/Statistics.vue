<template>
  <div class="container" id="observer" :class="{'d-none':!active}">
    <div class="row justify-content-around" id="observable">
      <div class="col-auto" :class="styles.good">
        <span>Здоровых участков:</span>
        <span>{{ Math.round(good) }}</span>
      </div>
      <div class="col-auto" :class="styles.bad">
        <span>Подозрительных участков:</span>
        <span>{{ Math.round(covid) }}</span>
      </div>
      <div class="col-auto" :class="styles.all">
        <span>Всего участков:</span>
        <span>{{ Math.round(all) }}</span>
      </div>
    </div>
    <div class="row justify-content-around mt-5">
      <div class="col-4" :class="styles.doc">
        <span>Необходимость обратиться ко врачу:</span>
        <span>{{Math.round(covid/all*500)}}%</span>
      </div>
    </div>
  </div>

</template>

<script>
import styles from "./Statistics.module.sass"
import {onMounted} from 'vue'
import {mapState} from 'vuex'

// import anime from 'animejs'
export default {
  name: "Statistics",
  components: {},
  props: {
    active: [Boolean]
  },
  computed: {
    ...mapState({
      good: state=>state.statistics.good,
      all: state=>state.statistics.all,
      covid: state=>state.statistics.covid
    }),
  },
  setup(props) {
    function startAnimation() {
      // do  stuff
      if (props.active) {
        console.log("stuff");
      }
    }

    onMounted(() => {
      const config = {
        root: document.getElementById('observer'),
        threshold: 1.0,
      }
      console.log(props.active)
      let observer = new IntersectionObserver(startAnimation, config)
      observer.observe(document.getElementById('observable'))
      // anime({
      //   targets: numbers.value,
      //   good: 10000,
      //   easing: 'linear'
      // })
    })
    return {
      styles
    }
  }
}
</script>

<style scoped>

</style>
