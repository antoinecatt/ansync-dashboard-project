import React from 'react';
import TempCard from './TempCard';
import { Row } from 'reactstrap';

const TempCardList = ({ temps }) => {
   const tempList = temps.map(val => {
    return (
      <TempCard
        key={val._id}
        id={val.id}
        temperature={val.temp}
        rangemax={val.rangemax}
        rangemin={val.rangemin}
        hum={val.hum}
      />
    );
  });

  return <Row>{tempList}</Row>;
};

export default TempCardList;
