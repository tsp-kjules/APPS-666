import React, { useState, useEffect } from 'react';
import data from './data/hell_property_data.json';

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(data);
  }, []);

  return (
    <div>
      <h1>Hell Property Data</h1>
      <ul>
        {properties.map((property) => (
          <ul key={property.id}>
            <h2>{property.address}</h2>
            <p>{property.owner}</p>
            <p>{property.type}</p>
            <p>{property.roofType}</p>
            <p>{property.roofAngle}</p>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default App;
