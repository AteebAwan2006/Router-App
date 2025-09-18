import React from "react";
import "./App.css";
import Header from "./My Component/Header";
import About from "./My Component/About";
import Contact from "./My Component/Contact";
import Home from "./My Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
