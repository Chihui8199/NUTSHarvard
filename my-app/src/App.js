import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./Components/NavigationBar";
import InventoryPage from "./Pages/InventoryPage";
import MainPage from "./Pages/MainPage";
import background from "./Images/background.jpg";



const App = () => {
  return (
      
    <div className="App" style={{backgroundImage:`url(${background})`, height:"100vh",width:"auto" }}>
      <BrowserRouter>
        <NavigationBar/>
        <div>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/settings" element={<SettingsPage/>} />
            <Route path="/inventory" element={<InventoryPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
