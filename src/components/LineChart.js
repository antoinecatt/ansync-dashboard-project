import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = ({ series, options }) => {
  return (
    <div>
      <Chart series={series} options={options} />
    </div>
  );
};

export default LineChart;
