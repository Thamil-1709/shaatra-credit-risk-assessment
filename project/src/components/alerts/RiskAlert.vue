`<script setup lang="ts">
import { computed } from 'vue';
import { calculateRiskLevel } from '@/utils/riskCalculator';

const props = defineProps<{
  score: number;
}>();

const riskLevel = computed(() => calculateRiskLevel(props.score));
const showAlert = computed(() => props.score < 40);
</script>

<template>
  <v-alert
    v-if="showAlert"
    type="error"
    title="Critical Risk Alert"
    text="This applicant has a high risk profile. Additional verification recommended."
    class="mb-4"
  ></v-alert>
</template>`