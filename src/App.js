import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Seller from './pages/Seller';
import Dashboard from './pages/Creator';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sellnfts" element={<Seller />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
