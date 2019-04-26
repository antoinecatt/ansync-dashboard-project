import React from 'react';
import TempCard from './TempCard'

const TempCardList = ({temps}) => {

  const tempList = temps.map(temp => {
    return <TempCard key={temp._id} id={temp.id} temp={temp.temp} rangemax={temp.rangemax} rangemin={temp.rangemin} hum={temp.hum} />
  })

  return (
    <div>
      {tempList}
    </div>
  )
};

export default TempCardList;