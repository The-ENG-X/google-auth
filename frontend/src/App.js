import './App.css';
import GoogleSignInButton from './components/GoogleSignInButton';
import React from 'react';
import Home from "./Home"
import About from "./About"
import Loging from "./Loging"
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loging" element={<Loging />} />
        {/* <GoogleSignInButton /> */}
      </Routes>
    </div>
  );
}



export default App;
