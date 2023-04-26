import React from "react";
import PropertyList from "./PropertyList";

const CompareData = ({ originalData, modifiedData }) => {
  return (
    <div>
      <h1>Original Data</h1>
      <PropertyList properties={originalData} />
      <h1>Modified Data</h1>
      <PropertyList properties={modifiedData} />
    </div>
  );
};

export default CompareData;
