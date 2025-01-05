`<script setup lang="ts">
import { computed } from 'vue';
import { calculateRiskLevel } from '@/utils/riskCalculator';

const props = defineProps<{
  score: number;
}>();

const riskLevel = computed(() => calculateRiskLevel(props.score));
</script>

<template>
  <v-card-text class="text-center">
    <div 
      class="text-h4"
      :class="`text-${riskLevel.color}`"
    >
      {{ riskLevel.level }}
    </div>
    <div class="text-subtitle-1">Risk Classification</div>
  </v-card-text>
</template>`