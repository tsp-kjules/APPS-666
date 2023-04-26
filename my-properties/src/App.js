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
          <Route exact path="/">
            <PropertyList properties={originalData} />
          </Route>
          <Route exact path="/add">
            <PropertyForm addProperty={addProperty} />
          </Route>
          <Route exact path="/edit/:id">
            <PropertyForm
              updateProperty={updateProperty}
              originalData={originalData}
              modifiedData={modifiedData}
            />
          </Route>
          <Route exact path="/compare">
            <CompareData
              originalData={originalData}
              modifiedData={modifiedData}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
