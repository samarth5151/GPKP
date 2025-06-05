import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componant/Navbar';
import Home from './componant/Home';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Add your Routes here */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
