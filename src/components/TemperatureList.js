import React from 'react';
import Temperature from './Temperature'

const TemperatureList = ({temps}) => {

  const tempList = temps.map(temp => {
    return <Temperature key={temp._id} id={temp.id} temp={temp.temp} rangemax={temp.rangemax} rangemin={temp.rangemin} hum={temp.hum} />
  })

  return (
    <div>
      {tempList}
    </div>
  )
};

export default TemperatureList;