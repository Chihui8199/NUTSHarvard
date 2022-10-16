import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/NavigationBar";
import InventoryPage from "./Pages/InventoryPage";
import MainPage from "./Pages/MainPage";


const App = () => {
  return (
    <div className="App" style={{ backgroundColor: "floralwhite" }}>
      <BrowserRouter>
        <NavigationBar />
        <div>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/inventory" element={<InventoryPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
