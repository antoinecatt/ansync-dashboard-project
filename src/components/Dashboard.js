import React from 'react';
import TemperatureList from './TemperatureList';

const Dashboard = ({ temps }) => {
  return (
    <div>
      <TemperatureList temps={temps} />
    </div>
  );
};

export default Dashboard;
