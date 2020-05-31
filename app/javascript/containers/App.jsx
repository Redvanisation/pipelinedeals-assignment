import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColumnsChart from '../components/ColumnsChart';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState([]);


  const setColors = (arr) => {
    let i = 0;
    const colors = [];
    while (i < arr.length) {
      colors.push(`rgba(${Math.floor(Math.random()*255)}, 
                        ${Math.floor(Math.random()*255)}, 
                        ${Math.floor(Math.random()*255)}, 
                    .7)`);
      i++;
    }
    return colors;
  }

  const getChart = () => {
    axios.get('/api/v1/deals')
    .then(res => {
      const values = [];
      const stages = Object.keys(res.data);
      let groupValue = 0;

      for (let obj in res.data) {
        for (let entry in res.data[obj]) {
          groupValue += res.data[obj][entry].value;
        }        
        values.push(groupValue);
      }

        setChartData({
          labels: stages, // stages
          datasets: [
            {
              data: values, // values
              backgroundColor: setColors(values),
            },
          ],
          options: {
            responsive: true,
            maintainAspectRatio: false,
          }
        });

        setIsLoading(false);
      })
      .catch(() => console.log('Error getting the data!'));
  };

  useEffect(() => {
    getChart();
  }, [])

  return (
    <ColumnsChart isLoading={isLoading} chartData={chartData} />
  );
}

export default App;
