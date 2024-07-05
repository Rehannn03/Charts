import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
function Overall_Sentiment({data}) {
    const overallSentimentCount = data.overall_sentiment_count;

    const chartData = {
      labels: overallSentimentCount.sentiment,
      datasets: [
        {
          data: overallSentimentCount.sentiment_count,
          backgroundColor: overallSentimentCount.sentiment.map(() => getRandomColor())
        }
      ]
    };
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    return <Pie data={chartData} />;
}

export default Overall_Sentiment