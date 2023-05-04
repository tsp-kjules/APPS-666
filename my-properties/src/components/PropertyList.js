import React, { useState, useEffect } from 'react';
import data from '../data/hell_property_data.json';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(data);
    // fetch("./data/hell_property_data.json")
    //   .then((response) => response.json())
    //   .then((data) => setProperties(data))
  }, []);

  // Create a textAlign of center variable
  const cellStyle = {
    textAlign: 'center',
  };

  return (
    <div>
      <h2>Properties</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Owner</th>
            <th>Type</th>
            <th>Roof Type</th>
            <th>Roof Angle</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td style={cellStyle}>{property.id}</td>
              <td style={cellStyle}>{property.address}</td>
              <td style={cellStyle}>{property.owner}</td>
              <td style={cellStyle}>{property.type}</td>
              <td style={cellStyle}>{property.roofType}</td>
              <td style={cellStyle}>{property.roofAngle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyList;
