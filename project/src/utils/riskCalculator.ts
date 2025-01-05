export const calculateRiskLevel = (score: number) => {
  if (score >= 80) return { level: 'Low Risk', color: 'success' };
  if (score >= 60) return { level: 'Medium Risk', color: 'warning' };
  if (score >= 40) return { level: 'High Risk', color: 'error' };
  return { level: 'Critical Risk', color: 'error darken-2' };
};