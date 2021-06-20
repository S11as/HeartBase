<template>
  <div :class="[styles.wrapper]" id="cWrapper">
    <canvas id="myChart" width="650" height="350">
    </canvas>
  </div>
</template>

<script>
import styles from './Chart.module.sass'
import {Chart, registerables} from 'chart.js'
import {onMounted} from 'vue'
// eslint-disable-next-line no-unused-vars
import useChart from './useChart'
// eslint-disable-next-line no-unused-vars
import {SET_NUMBERS} from "@/store/types";
import store from "@/store/store";
import {ref, watch} from 'vue'
export default {
  name: "Chart",
  props: {
    index: [Number]
  },
  setup(props) {
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    // eslint-disable-next-line no-unused-vars
    const addData = (chart)=>{
      chart.data.labels.push(1);
      let f = getRandomArbitrary(1, 5);
      for (let i =0;i<f;i++){
        chart.data.datasets[0].data.push(getRandomArbitrary(1, 25));
        chart.update();
      }
    }
    const i = ref(props.index)
    watch(i, (selection)=>{
      console.log("we are here", selection)
    })
    onMounted(() => {
      Chart.register(...registerables);
      let ctx = document.getElementById('myChart').getContext('2d');
      const {numbers, rates, labels, chart, ratesLink, labelsLink} =  useChart(ctx);

      store.commit(SET_NUMBERS, {...numbers, rates, labels, chart, ratesLink, labelsLink});
    })
    return {
      styles
    }
  }
}
</script>

<style scoped>

</style>
