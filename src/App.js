import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { useTranslation } from "react-i18next";

import Navbar from "./components/Navbar";
import Home from "./components/home";
//import News from "./components/newspaper";
import Memoirs from "./components/memoirs";
import Gallery from "./components/gallery";
//import About from "./components/about";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" exact element={<Home />} />
          <Route path="/memoirs" element={<Memoirs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
