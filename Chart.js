const data = {
    sentiments: [
      {
        montly: {
          "1": {
            sentiment: ["excellent", "neutral", "very negative"],
            monthly_count: [11, 1, 2]
          },
          "2": {
            sentiment: ["excellent", "very negative"],
            monthly_count: [16, 1]
          },
          "3": {
            sentiment: ["excellent", "negative", "neutral", "positive"],
            monthly_count: [31, 1, 1, 6]
          }
        }
      }
    ]
  };
  
  // Access the sentiments array
  const sentimentsArray = data.sentiments;
  
  // Iterate over the sentiments array
  sentimentsArray.forEach(sentimentData => {
    // Access the monthly data
    const monthlyData = sentimentData.montly;
    
    // Iterate over each month in the monthly data
    for (const month in monthlyData) {
      if (monthlyData.hasOwnProperty(month)) {
        // Get the sentiments and counts for the current month
        const sentiments = monthlyData[month].sentiment;
        const counts = monthlyData[month].monthly_count;
        // console.log(sentiments, counts);
        sentiments.map((item)=>{
            console.log(item);
        })
        // Iterate over the sentiments and counts
        // for (let i = 0; i < sentiments.length; i++) {
        //   const sentiment = sentiments[i];
        //   const count = counts[i];
        //   console.log("Labels;");
          // Process the sentiment and count (for example, log them)
        //   console.log(`Month: ${month}, Sentiment: ${sentiment}, Count: ${count}`);
        }
      }
    }
  );