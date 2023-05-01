import React, { useState, useEffect } from "react";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("./data/hell_property_data.json")
      .then((response) => response.json())
      .then((data) => setProperties(data))
  }, []);

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
              <td>{property.id}</td>
              <td>{property.address}</td>
              <td>{property.owner}</td>
              <td>{property.type}</td>
              <td>{property.roofType}</td>
              <td>{property.roofAngle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyList;
