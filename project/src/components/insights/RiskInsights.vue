`<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  data: {
    income: number;
    employmentStatus: string;
    utilityPayments: string;
    socialSentiment: string;
  };
}>();

const recommendations = computed(() => {
  const insights = [];
  
  if (props.data.income < 30000) {
    insights.push('Low income level - Additional income verification recommended');
  }
  
  if (props.data.employmentStatus !== 'employed') {
    insights.push('Employment status requires additional documentation');
  }
  
  if (props.data.utilityPayments === 'missed') {
    insights.push('Poor utility payment history - Consider higher risk premium');
  }
  
  return insights;
});
</script>

<template>
  <v-card class="pa-4">
    <h2 class="text-h5 mb-4">Risk Insights</h2>
    <v-list v-if="recommendations.length">
      <v-list-item
        v-for="(insight, index) in recommendations"
        :key="index"
        :title="insight"
        prepend-icon="mdi-alert-circle"
      ></v-list-item>
    </v-list>
    <v-alert
      v-else
      type="success"
      text="No significant risk factors identified"
    ></v-alert>
  </v-card>
</template>`