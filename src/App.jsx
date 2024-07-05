import { useEffect,useState } from 'react'
import './App.css'
import Montly_Avg from './Montly_Avg'
import Overall_Sentiment from './Overall_Sentiment'
import Yearly_Avg from './Yearly_Avg'
import Montly_sentiment from './Montly_sentiment'
function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/data');
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setData(data);
        setLoading(false); // Set loading to false after data is fetched
        console.log(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false); // Set loading to false even if there is an error
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 mt-3 ml-3">
        <div className="w-full sm:w-1/2 max-w-3xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Monthly Average</h2>
          {!loading && <Montly_Avg data={data} />}
        </div>
        
        <div className="w-full sm:w-1/2 max-w-3xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Monthly Data</h2>
          {!loading && <Montly_sentiment data={data} />}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5 m-5">
        <div className="w-full sm:w-1/2 max-w-3xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Yearly Average</h2>
          {!loading && <Yearly_Avg data={data} />}
        </div>
        <div className="w-full sm:w-1/2 max-w-3xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Overall Sentiment</h2>
          {!loading && <Overall_Sentiment data={data} />}
        </div>
      </div>
    </>
  );
}

export default App
