`<script setup lang="ts">
const utilityOptions = ['on-time', 'delayed', 'missed'];

defineProps<{
  modelValue: string;
}>();

defineEmits(['update:modelValue']);
</script>

<template>
  <v-select
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :items="utilityOptions"
    label="Utility Payments Status"
    required
  ></v-select>
</template>`