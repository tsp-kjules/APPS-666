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
    setProperties(data);
  }, []);

  const updateProperty = (updatedProperty) => {
    setProperties(
      properties.map((property) =>
        property.id === updatedProperty.id
          ? updatedProperty
          : property,
      ),
    );
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            exact
            path="/"
            element={<PropertyList properties={properties} />}
          />
          <Route
            path="/edit/:id"
            element={
              <PropertyForm
                properties={properties}
                updateProperty={updateProperty}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
