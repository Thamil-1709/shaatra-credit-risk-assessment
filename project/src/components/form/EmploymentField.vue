`<script setup lang="ts">
const employmentOptions = ['employed', 'self-employed', 'unemployed'];

defineProps<{
  modelValue: string;
}>();

defineEmits(['update:modelValue']);
</script>

<template>
  <v-select
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :items="employmentOptions"
    label="Employment Status"
    required
  ></v-select>
</template>`