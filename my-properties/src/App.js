import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import PropertyList from "./components/PropertyList";
import PropertyForm from "./components/PropertyForm";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("./data/hell_property_data.json")
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);

  const addProperty = (property) => {
    setProperties([...properties, property]);
  };

  const updateProperty = (updatedProperty) => {
    setProperties(
      properties.map((property) =>
        property.id === updatedProperty.id ? updatedProperty : property
      )
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
            <li>
              <Link to="/add">Add Property</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<PropertyList properties={properties}/>} />
            {/* <PropertyList properties={properties} /> */}
          {/* <Route path="/add">
            <PropertyForm addProperty={addProperty} />
          </Route>
          <Route path="/edit/:id">
            <PropertyForm updateProperty={updateProperty} />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
