import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/hell_property_data.json';

const PropertyList = ({ modifiedProperties }) => {
  const [originalProperties, setOriginalProperties] = useState([]);

  useEffect(() => {
    setOriginalProperties(data);
  }, []);

  const cellStyle = {
    textAlign: 'center',
  };

  const modifiedCellStyle = {
    textAlign: 'center',
    backgroundColor: 'yellow',
  };

  return (
    <div>
      <h2>Properties</h2>
      <div style={{ display: 'block' }}>
        <div>
          <h3>Original Data</h3>
          <table>
            {/* Render the table header and rows for the original data */}
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
              {originalProperties.map((property) => (
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
        <div>
          <h3>Modified Data</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Address</th>
                <th>Owner</th>
                <th>Type</th>
                <th>Roof Type</th>
                <th>Roof Angle</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {modifiedProperties.map((property, index) => {
                const originalProperty = originalProperties[index];
                if (!originalProperty) return null;
                return (
                  <tr key={property.id}>
                    <td style={cellStyle}>{property.id}</td>
                    <td
                      style={
                        originalProperty.address === property.address
                          ? cellStyle
                          : modifiedCellStyle
                      }
                    >
                      {property.address}
                    </td>
                    <td
                      style={
                        originalProperty.owner === property.owner
                          ? cellStyle
                          : modifiedCellStyle
                      }
                    >
                      {property.owner}
                    </td>
                    <td
                      style={
                        originalProperty.type === property.type
                          ? cellStyle
                          : modifiedCellStyle
                      }
                    >
                      {property.type}
                    </td>
                    <td
                      style={
                        originalProperty.roofType ===
                        property.roofType
                          ? cellStyle
                          : modifiedCellStyle
                      }
                    >
                      {property.roofType}
                    </td>
                    <td
                      style={
                        originalProperty.roofAngle ===
                        property.roofAngle
                          ? cellStyle
                          : modifiedCellStyle
                      }
                    >
                      {property.roofAngle}
                    </td>
                    <td>
                      <Link to={`/edit/${property.id}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
