<template>
  <Line
    v-if="loaded"
    :data="dataline"
    :options="options"
  />
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

export default {
  components: {
    Line,
  },
  props: {
    options: {
      type: Object,
      default: null,
    },
    chartData: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      default: 'stay',
    },
  },
  data() {
    return {
      loaded: false,
      dataline: {},
    };
  },
  computed: {
    setColor() {
      if (this.type === 'up') {
        return '93, 214, 98';
      } if (this.type === 'down') {
        return '255, 114, 114';
      }
      return '185, 185, 185';
    },
  },
  mounted() {
    this.loaded = true;
    this.dataline = {
      labels: this.labels,
      datasets: [{
        borderColor: 'rgb(' + this.setColor + ')',
        borderWidth: 3,
        pointBorderColor: 'rgb(' + this.setColor + ')',
        fill: true,
        data: this.chartData,
        backgroundColor: (context) => {
          const { chart } = context;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            // This case happens on initial chart load
            return true;
          }
          const gradient = ctx.createLinearGradient(0, 100, 0, 600);
          gradient.addColorStop(0, 'rgba(' + this.setColor + ', 0.5)');
          gradient.addColorStop(0.15, 'rgba(' + this.setColor + ', 0.0)');
          gradient.addColorStop(1, 'rgba(' + this.setColor + ', 0)');

          return gradient;
        },
      }],
    };
  },
};
</script>
