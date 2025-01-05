`<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { getChartOptions } from '@/utils/chartConfig';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const props = defineProps<{
  features: Array<{
    name: string;
    importance: number;
    effect: 'positive' | 'negative';
  }>;
}>();

const chartData = {
  labels: props.features.map(f => f.name),
  datasets: [{
    label: 'Feature Importance',
    data: props.features.map(f => f.importance),
    backgroundColor: props.features.map(f => 
      f.effect === 'positive' ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)'
    ),
  }]
};

const chartOptions = getChartOptions();
</script>

<template>
  <v-card class="pa-4">
    <h2 class="text-h5 mb-4">Feature Importance Analysis</h2>
    <Bar 
      :data="chartData" 
      :options="chartOptions"
      class="chart-container"
    />
  </v-card>
</template>

<style scoped>
.chart-container {
  min-height: 300px;
}
</style>`