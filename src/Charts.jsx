import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
function Charts() {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3000/sentiments');
                const data = await res.json();
                setFetchedData(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);

    if (fetchedData.length === 0) {
        return <div>Loading...</div>;
    }

    const months = fetchedData[0];
    console.log('months', months.montly);
    const data = {
        labels: months ? Object.keys(months) : [],
        datasets: [{
            label: 'Sentiments_Score',
            data: months ? Object.values(months.montly).map(key => key.sentiment) : [],
            backgroundColor: [
                'rgba(255, 99, 132, 1.0)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)'
            ],
            borderRadius: 10
        }]
    };

    return (
        <div>
            {months && Object.values(months.montly).map((key, index) => (
                <div key={index}>
                    <p>Monthly Count: {key.monthly_count}  </p>
                    <p>Monthly Sentiment: {key.sentiment }  </p>
                    <Doughnut data={{
                        labels: key.sentiment,
                        datasets: [
                            {
                                label: 'Sentiments_Score',
                                data: [key.monthly_count],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.9)',
                                    'rgba(54, 162, 235, 0.9)',
                                    'rgba(255, 206, 86, 0.9)'
                                ],
                                borderRadius: 5
                            }
                        ]
                    }} />
                </div>
            ))}
        </div>
    );
}

export default Charts;
