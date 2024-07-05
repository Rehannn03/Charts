import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
function Montly_Avg({data}) {
    const monthlyAvgSentiment = data.monthly_average_sentiment;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const avgSentiment = monthlyAvgSentiment.avg_sentiment;
  
    const chartData = {
      labels: months,
      datasets: [
        {
          label: 'Monthly Average Sentiment',
          data: avgSentiment.map((sentiment) => sentimentToValue(sentiment)),
          borderColor: 'rgba(75,192,192,1)',
          fill: false,
        }
      ]
    };
  
    function sentimentToValue(sentiment) {
      const sentimentValues = {
        'very negative': 1,
        'negative': 2,
        'neutral': 3,
        'positive': 4,
        'excellent': 5
      };
      return sentimentValues[sentiment];
    }
  
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              const sentimentLabels = ['Very Negative', 'Negative', 'Neutral', 'Positive', 'Excellent'];
              return sentimentLabels[value - 1];
            }
          }
        }
      }
    };
  
    return <Line data={chartData} options={options} />;
}

export default Montly_Avg