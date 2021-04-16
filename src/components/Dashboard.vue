<template>
    <div>
        <div class="graphs"><apexchart width="500" type="bar" :options="options" :series="series"></apexchart></div>
        <div class="graphs"><apexchart width="500" type="line" :options="options" :series="series"></apexchart></div>
    </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
import Vue from 'vue'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

export default {
    name: 'DashBoard',
    data() {
        return {
            options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
    }
    },
    
}
</script>
<style scoped>
.graphs{
    float: left;
    margin-right: 10px;
    margin-left: 100px;
    margin-top: 100px;
}
</style>
