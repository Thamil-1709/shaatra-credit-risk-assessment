`<script setup lang="ts">
defineProps<{
  data: {
    income: number;
    employmentStatus: string;
    utilityPayments: string;
    socialSentiment: string;
    spendingHabits: string;
  };
}>();
</script>

<template>
  <v-card class="pa-4">
    <h2 class="text-h5 mb-4">Applicant Summary</h2>
    <v-list>
      <v-list-item>
        <template v-slot:prepend>
          <v-icon>mdi-currency-usd</v-icon>
        </template>
        <v-list-item-title>Annual Income</v-list-item-title>
        <v-list-item-subtitle>${{ data.income.toLocaleString() }}</v-list-item-subtitle>
      </v-list-item>
      
      <v-list-item>
        <template v-slot:prepend>
          <v-icon>mdi-briefcase</v-icon>
        </template>
        <v-list-item-title>Employment</v-list-item-title>
        <v-list-item-subtitle>{{ data.employmentStatus }}</v-list-item-subtitle>
      </v-list-item>
      
      <v-list-item>
        <template v-slot:prepend>
          <v-icon>mdi-lightning-bolt</v-icon>
        </template>
        <v-list-item-title>Utility Payments</v-list-item-title>
        <v-list-item-subtitle>{{ data.utilityPayments }}</v-list-item-subtitle>
      </v-list-item>
      
      <v-list-item>
        <template v-slot:prepend>
          <v-icon>mdi-emoticon</v-icon>
        </template>
        <v-list-item-title>Social Sentiment</v-list-item-title>
        <v-list-item-subtitle>{{ data.socialSentiment }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>`