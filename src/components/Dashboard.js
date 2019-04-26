import React from 'react';
import TemperatureList from './TemperatureList';
import LineChart from './LineChart';

const Dashboard = ({ temps, series, options}) => {
  return (
    <div>
      <LineChart series={series} options={options}/>
      <TemperatureList temps={temps} />
    </div>
  );
};

export default Dashboard;
