`<script setup lang="ts">
defineProps<{
  score: number;
}>();
</script>

<template>
  <v-card-text class="text-center">
    <div class="text-h3 font-weight-bold">{{ score }}%</div>
    <div class="text-subtitle-1">Repayment Probability</div>
  </v-card-text>
</template>`