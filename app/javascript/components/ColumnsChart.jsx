import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import PropTypes from 'prop-types';

defaults.global.legend.display = false;
defaults.global.defaultFontFamily = "'PT Sans', sans-serif"

// The columns chart component gets the data from through the props
// and renders a loading text or the Bar component (which contains the columns chart)
// when the isLoading state is false
const ColumnsChart = ({ isLoading, chartData }) => (
  <div>
    <h2 className="main-title">Column chart displaying total $ deal value in each stage</h2>
    {
      !isLoading
        ? (
          <Bar
            className="bar"
            data={chartData}
            options={{}}
          />
        )
        : <h2 className="loading">Content is loading!</h2>
    }
    
    </div>
);

ColumnsChart.defaultProps = {
  isLoading: true
}

ColumnsChart.propTypes = {
  isLoading: PropTypes.bool,
  chartData: PropTypes.instanceOf(Object).isRequired
}

export default ColumnsChart;
