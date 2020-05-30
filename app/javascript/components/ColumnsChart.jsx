import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import PropTypes from 'prop-types';

defaults.global.legend.display = false;
defaults.global.defaultFontFamily = "'PT Sans', sans-serif"


const ColumnsChart = ({ isLoading, chartData }) => {


  return (
    <div>
      <h2 className="title">Chart Component</h2>
      {
        !isLoading
          ? (
            <Bar
             data={chartData}
             options={{}}
           />
          )
          : <h2 className="title">Content is loading!</h2>
      }
      
    </div>
  );
};

ColumnsChart.defaultProps = {
  isLoading: true
}

ColumnsChart.propTypes = {
  isLoading: PropTypes.bool,
  chartData: PropTypes.instanceOf(Object).isRequired
}

export default ColumnsChart;
