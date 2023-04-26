import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PropertyList from "./components/PropertyList";
import PropertyForm from "./components/PropertyForm";
import CompareData from "./components/CompareData";

function App() {
  const [originalData, setOriginalData] = useState([]);
  const [modifiedData, setModifiedData] = useState([]);

  useEffect(() => {
    fetch("/data/hell_property_data.json")
      .then((response) => response.json())
      .then((data) => setOriginalData(data));
    fetch("/data/modified_property_data.json")
      .then((response) => response.json())
      .then((data) => setModifiedData(data));
  }, []);

  const addProperty = (property) => {
    setModifiedData([...modifiedData, property]);
  };

  const updateProperty = (updatedProperty) => {
    setModifiedData(
      modifiedData.map((property) =>
        property.id === updatedProperty.id ? updatedProperty : property
      )
    );
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<PropertyList properties={originalData} />}
          />
          <Route
            path="/add"
            element={<PropertyForm addProperty={addProperty} />}
          />
          <Route
            path="/edit/:id"
            element={<PropertyForm updateProperty={updateProperty} />}
          />
          <Route
            path="/compare"
            element={
              <CompareData
                originalData={originalData}
                modifiedData={modifiedData}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
