import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const PropertyForm = ({ properties, updateProperty }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const propertyToEdit = properties.find(
      (property) => property.id === parseInt(id),
    );
    if (propertyToEdit) {
      setProperty({ ...propertyToEdit });
    }
  }, [id, properties]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!property.address || !property.owner) {
      alert('Please provide both an address and owner name.');
      return;
    }
    if (property) {
      updateProperty(property);
      navigate('/');
    }
  };

  if (!property) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={property.address}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Owner:
          <input
            type="text"
            name="owner"
            value={property.owner}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={property.type}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Roof Type:
          <input
            type="text"
            name="roofType"
            value={property.roofType}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Roof Angle:
          <input
            type="number"
            name="roofAngle"
            value={property.roofAngle}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default PropertyForm;
