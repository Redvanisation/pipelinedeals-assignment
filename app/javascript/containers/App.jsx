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
                    .5)`);
      i++;
    }
    return colors;
  }


  const getChart = () => {
    const values = [];
    const stages = [];

    axios.get('/api/v1/deals')
      .then(res => {
        res.data.forEach(entry => {
          values.push(entry.value);
          stages.push(entry.stage);
        })

        setChartData({
          labels: stages, // stages
          datasets: [
            {
              label: '',
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
      });
  };

  useEffect(() => {
    getChart();
  }, [])

  return (
    <ColumnsChart isLoading={isLoading} chartData={chartData} />
  );
}

export default App;
