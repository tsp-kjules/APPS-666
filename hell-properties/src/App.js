import data from "./hell_property_data.json";
import React, { useState } from "react";

function App() {
  const [properties, setProperties] = useState(data);

  const handleEdit = (propertyId, propertyName, newValue) => {
    // Find the property in the array and update its value
    const updatedProperties = properties.map((property) => {
      if (property.id === propertyId) {
        // Create a new object with the updated value
        return { ...property, [propertyName]: newValue };
      } else {
        return property;
      }
    });
    // Set the new state with the updated properties
    setProperties(updatedProperties);
  };

  return (
    <div>
      <h1>Hell Property List</h1>
      <table>
        <thead>
          <tr>
            <th>Property ID</th>
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
              <td>
                <input
                  type="text"
                  value={property.value}
                  onChange={(event) =>
                    handleEdit(property.id, "value", event.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
