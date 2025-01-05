`<script setup lang="ts">
import RiskScore from './risk/RiskScore.vue';
import RiskLevel from './risk/RiskLevel.vue';

defineProps<{
  score: number;
  predictionTime: number;
}>();
</script>

<template>
  <v-card class="pa-4">
    <h2 class="text-h5 mb-4">Credit Risk Assessment</h2>
    
    <v-row>
      <v-col cols="6">
        <RiskScore :score="score" />
      </v-col>
      
      <v-col cols="6">
        <RiskLevel :score="score" />
      </v-col>
    </v-row>

    <v-divider class="my-4"></v-divider>

    <div class="text-caption text-right">
      Prediction generated in {{ predictionTime }}ms
    </div>
  </v-card>
</template>`