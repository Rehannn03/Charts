import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
function Yearly_Avg({data}) {
    const yearlyAvgSentiment = data.yearly_average_sentiment;

  const chartData = {
    labels: yearlyAvgSentiment.year,
    datasets: [
      {
        label: 'Yearly Average Sentiment',
        data: yearlyAvgSentiment.avg_value.map((sentiment) => sentimentToValue(sentiment)),
        borderColor: 'rgba(153,102,255,1)',
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

export default Yearly_Avg