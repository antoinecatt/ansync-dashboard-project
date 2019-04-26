import React from 'react';

const Temperature = ({ id, temp, rangemax, rangemin, hum }) => {
  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{temp}</li>
        <li>{rangemax}</li>
        <li>{rangemin}</li>
        <li>{hum}</li>
      </ul>
    </div>
  );
};

export default Temperature;
