`<script setup lang="ts">
import { ref } from 'vue';
import UserInputForm from './components/UserInputForm.vue';
import RiskPrediction from './components/RiskPrediction.vue';
import FeatureImportance from './components/FeatureImportance.vue';
import RiskAlert from './components/alerts/RiskAlert.vue';
import RiskInsights from './components/insights/RiskInsights.vue';
import ApplicantSummary from './components/summary/ApplicantSummary.vue';

const predictionScore = ref(0);
const predictionTime = ref(0);
const applicantData = ref({
  income: 0,
  employmentStatus: '',
  utilityPayments: '',
  socialSentiment: '',
  spendingHabits: '',
});

const features = ref([
  { name: 'Income', importance: 0.4, effect: 'positive' },
  { name: 'Employment', importance: 0.3, effect: 'positive' },
  { name: 'Utility Payments', importance: 0.2, effect: 'negative' },
  { name: 'Social Sentiment', importance: 0.1, effect: 'positive' },
]);

const handleSubmit = (data: any) => {
  applicantData.value = data;
  const startTime = performance.now();
  
  // Simulate API call and prediction
  setTimeout(() => {
    predictionScore.value = Math.random() * 100;
    predictionTime.value = Math.round(performance.now() - startTime);
    
    // Update feature importance based on input data
    features.value = [
      { 
        name: 'Income',
        importance: data.income > 50000 ? 0.4 : 0.2,
        effect: data.income > 50000 ? 'positive' : 'negative'
      },
      {
        name: 'Employment',
        importance: data.employmentStatus === 'employed' ? 0.3 : 0.15,
        effect: data.employmentStatus === 'employed' ? 'positive' : 'negative'
      },
      {
        name: 'Utility Payments',
        importance: data.utilityPayments === 'on-time' ? 0.2 : 0.4,
        effect: data.utilityPayments === 'on-time' ? 'positive' : 'negative'
      },
      {
        name: 'Social Sentiment',
        importance: 0.1,
        effect: data.socialSentiment === 'positive' ? 'positive' : 'negative'
      },
    ];
  }, 1000);
};
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <h1 class="text-h3 mb-6 text-center">Credit Risk Dashboard</h1>
        
        <RiskAlert v-if="predictionScore" :score="predictionScore" />
        
        <v-row>
          <v-col cols="12" md="6">
            <UserInputForm @submit-data="handleSubmit" />
          </v-col>
          
          <v-col cols="12" md="6">
            <template v-if="predictionScore">
              <RiskPrediction
                :score="predictionScore"
                :prediction-time="predictionTime"
              />
              
              <v-divider class="my-4"></v-divider>
              
              <ApplicantSummary :data="applicantData" />
              
              <v-divider class="my-4"></v-divider>
              
              <FeatureImportance :features="features" />
              
              <v-divider class="my-4"></v-divider>
              
              <RiskInsights :data="applicantData" />
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>`