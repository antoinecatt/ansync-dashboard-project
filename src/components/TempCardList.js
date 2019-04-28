import React from 'react';
import TempCard from './TempCard';

const TempCardList = ({ temps }) => {
  const tempList = temps.map(val => {
    return (
      <TempCard
          key={val._id}
          id={val.id}
          temperature={parseInt(val.temp)}
          hum={parseInt(val.hum)}
          rangemin={parseInt(val.rangemin)}
          rangemax={parseInt(val.rangemax)}
      />
    );
  });

  return <div>{tempList}</div>;
};

export default TempCardList;
