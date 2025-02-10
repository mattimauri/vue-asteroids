<template>
  <div>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps({
  asteroids: {
    type: Array,
    required: true,
  },
});

const chartData = computed(() => {
  return {
    labels: props.asteroids.map((asteroid) => asteroid[0]), 
    datasets: [
      {
        label: 'Distanza (AU)',
        data: props.asteroids.map((asteroid) => parseFloat(asteroid[4])), 
        backgroundColor: 'rgba(54, 162, 235, 0.6)', 
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderWidth: 1,
      },
    ],
  };
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Distanza (AU)',
      },
    },
    x: {
      title: {
        display: true,
        text: 'Asteroidi',
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Distanza degli asteroidi',
    },
  },
});
</script>

<style scoped>
div {
  margin-top: 20px;
}
</style>