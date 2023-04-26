import React from "react";
import { Link } from "react-router-dom";

const PropertyList = ({ properties }) => {
  return (
    <div>
      <h1>Original Property List</h1>
      <ul>
        {properties.map((property) => (
          // <li key={property.id}>
          //   <Link to={`/edit/${property.id}`}>
          //     {property.address}, {property.owner}
          //   </Link>
          // </li>
          <tr key={property.id}>
            <td>{property.address}</td>
            <td>{property.owner}</td>
            <td>{property.type}</td>
            <td>{property.roofType}</td>
            <td>{property.roofAngle}</td>
          </tr>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
