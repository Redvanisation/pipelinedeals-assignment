import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColumnsChart from '../components/ColumnsChart';

const App = () => {

  // Setting the loading and the display data states
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState([]);

  // Function to return random RGBA colors for the columns
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

  // Function to get the API data, format it, update the chartData state with it 
  // and set the isLoading state to false after that
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

  // Using the useEffect hook to call the above function when the component mounts
  useEffect(() => {
    getChart();
  }, [])

  // Passing the two states as props to the columns chart component
  return (
    <ColumnsChart isLoading={isLoading} chartData={chartData} />
  );
}

export default App;
