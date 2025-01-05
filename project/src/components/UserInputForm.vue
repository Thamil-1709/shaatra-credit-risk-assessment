`<script setup lang="ts">
import { ref } from 'vue';
import EmploymentField from './form/EmploymentField.vue';
import UtilityPaymentsField from './form/UtilityPaymentsField.vue';

const income = ref('');
const employmentStatus = ref('employed');
const utilityPayments = ref('on-time');
const socialSentiment = ref('neutral');
const spendingHabits = ref('moderate');
const geolocation = ref('');

const sentimentOptions = ['positive', 'neutral', 'negative'];
const spendingOptions = ['high', 'moderate', 'low'];

const emit = defineEmits(['submit-data']);

const handleSubmit = () => {
  emit('submit-data', {
    income: Number(income.value),
    employmentStatus: employmentStatus.value,
    utilityPayments: utilityPayments.value,
    socialSentiment: socialSentiment.value,
    spendingHabits: spendingHabits.value,
    geolocation: geolocation.value,
  });
};
</script>

<template>
  <v-card class="pa-4">
    <h2 class="text-h5 mb-4">Applicant Information</h2>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="income"
        label="Annual Income"
        type="number"
        prefix="$"
        required
      ></v-text-field>

      <EmploymentField v-model="employmentStatus" />
      <UtilityPaymentsField v-model="utilityPayments" />

      <v-select
        v-model="socialSentiment"
        :items="sentimentOptions"
        label="Social Media Sentiment"
      ></v-select>

      <v-text-field
        v-model="geolocation"
        label="Location"
      ></v-text-field>

      <v-select
        v-model="spendingHabits"
        :items="spendingOptions"
        label="Spending Habits"
      ></v-select>

      <v-file-input
        label="Upload Data (CSV, JSON)"
        accept=".csv,.json"
      ></v-file-input>

      <v-btn
        color="primary"
        type="submit"
        block
        class="mt-4"
      >
        Submit Application
      </v-btn>
    </v-form>
  </v-card>
</template>`