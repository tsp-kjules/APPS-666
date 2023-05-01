import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const PropertyForm = ({ addProperty, updateProperty, originalData, modifiedData }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [property, setProperty] = useState({
    id: '',
    address: '',
    owner: '',
    type: '',
    roofType: '',
    roofAngle: '',
  });

  useEffect(() => {
    if (id) {
      const currentProperty = modifiedData.find(
        (property) => property.id === id
      );
      setProperty(currentProperty);
    }
  }, [id, modifiedData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!property.address || !property.owner) {
      alert('Please provide both an address and owner name.');
      return;
    }
    if (!property.id) {
      addProperty({ ...property, id: uuidv4() });
    } else {
      updateProperty(property);
    }
    navigate('/');
  };

  return (
    <div>
      <h1>{id ? 'Edit' : 'Add'} Property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            name='address'
            value={property.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='owner'>Owner</label>
          <input
            type='text'
            id='owner'
            name='owner'
            value={property.owner}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='type'>Type</label>
          <input
            type='text'
            id='type'
            name='type'
            value={property.type}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='roofType'>Roof Type</label>
          <input
            type='text'
            id='roofType'
            name='roofType'
            value={property.roofType}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='roofAngle'>Roof Angle</label>
          <input
            type='text'
            id='roofAngle'
            name='roofAngle'
            value={property.roofAngle}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit'>{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default PropertyForm;
