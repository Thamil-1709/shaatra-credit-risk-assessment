export const getChartOptions = () => ({
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Feature Importance (SHAP Values)'
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          const value = context.raw;
          // Safely handle undefined values
          if (typeof value !== 'number') {
            return 'No data available';
          }
          return `Impact: ${value.toFixed(2)}`;
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Importance'
      }
    }
  }
});