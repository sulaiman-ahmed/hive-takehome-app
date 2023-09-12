import './App.css';
import React, { useState } from "react";
import Dropdown from './Dropdown';
import Toggle from 'react-styled-toggle';


function App() {

  const options = [
    {value: "a", label: "A"},
    {value: "b", label: "B"},
    {value: "c", label: "C"},
    {value: "d", label: "D"},
    {value: "e", label: "E"},
    {value: "f", label: "F"},
    {value: "g", label: "G"},
    {value: "h", label: "H"}
  ];

  return (
    <div className="App">
      <div className="wrapper">
        <Dropdown 
          placeHolder="Select..." 
          options={options}
          isMultiSelect
        />
        <Dropdown 
          placeHolder="Select..." 
          options={options}
        />
      </div>
    </div>
  );
}

export default App;
