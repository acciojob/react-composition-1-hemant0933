
import React from "react";
import './../styles/App.css';
import Tab from "./Tab";
const App = () => {
  const arr = ['Tab 1','Tab 2', 'Tab 3'];
  return (
    <div>
      <Tab tabs={arr}/>
    </div>
  )
}

export default App
