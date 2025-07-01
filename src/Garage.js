import React from 'react';
import './Garage.css';

// Car Component
function Car(props) {
  return <li> {props.brand}</li>;
}

// Garage Component
function Garage() {
  const cars = [
    { id: 1, brand: 'HILLUX' },
    { id: 2, brand: 'Ford' },
    { id: 3, brand: 'Dodge' }
  ];

  return (
    <>
      <h1>Beautiful brands include ;</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

export default Garage;