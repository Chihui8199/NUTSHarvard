import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import InventoryPage from "./Pages/InventoryPage";
import Timer from "./Components/Timer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Timer />} />
            <Route path="/inventory" element={<InventoryPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
