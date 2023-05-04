import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import data from './data/hell_property_data.json';
import PropertyList from './components/PropertyList';
import PropertyForm from './components/PropertyForm';

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Get the localstorage from properties
    const storedProperties = localStorage.getItem('properties');
    if (storedProperties) {
      const parsedProperties = JSON.parse(storedProperties);
      if (Array.isArray(parsedProperties)) {
        setProperties(JSON.parse(storedProperties));
      } else {
        setProperties(data);
      }
    } else {
      setProperties(data);
    }
  }, []);

  const updateProperty = (updatedProperty) => {
    const updatedProperties = properties.map((property) =>
      property.id === updatedProperty.id ? updatedProperty : property,
    );
    setProperties(updatedProperties);
    localStorage.setItem(
      'properties',
      JSON.stringify(updatedProperties),
    );
  };

  const resetProperties = () => {
    setProperties(data);
    localStorage.setItem('properties', JSON.stringify(data));
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          {/* <Route
            exact
            path="/"
            element={<PropertyList properties={properties} />}
          /> */}
          <Route
            path="/edit/:id"
            element={
              <PropertyForm
                properties={properties}
                updateProperty={updateProperty}
              />
            }
          />
          <Route
            exact
            path="/"
            element={<PropertyList modifiedProperties={properties} />}
          />
        </Routes>
      </Router>
      <button onClick={resetProperties}>Reset</button>
    </div>
  );
}

export default App;
