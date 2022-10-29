import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav_Components/Navbar.js';
import './App.css';
import Home from './pages/Home';
import Timelines from './pages/Timeline.js';
import About from './pages/About.js';
import Homeimg from './pages/Homeimg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homeimg />} />
          <Route exact path="/todo" element={<Home />} />
          {/* <Route exact path="/reports" element={<Reports />} /> */}
          <Route exact path="/about-me" element={<About />} />
          <Route exact path="/timelines" element={<Timelines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
