import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
function Montly_sentiment({data}) {
    const monthlySentimentData = data.monthly_sentiment_count;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const sentimentsData = {};
    
    for (const month in monthlySentimentData) {
      const { sentiment, monthly_count } = monthlySentimentData[month];
      
      sentiment.forEach((sent, idx) => {
        if (!sentimentsData[sent]) {
          sentimentsData[sent] = Array(months.length).fill(0);
        }
        sentimentsData[sent][month - 1] = monthly_count[idx];
      });
    }
  
    const datasets = Object.keys(sentimentsData).map((sentiment) => ({
      label: sentiment,
      data: sentimentsData[sentiment],
      backgroundColor: getRandomColor(),
    }));
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    const chartData = {
      labels: months,
      datasets: datasets
    };
  
    return <Bar data={chartData} options={{ responsive: true, scales: { x: { beginAtZero: true }, y: { beginAtZero: true } } }} />;
}

export default Montly_sentiment