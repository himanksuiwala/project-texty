import "./styles.css";
import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Routes/Home";
import User from "./Routes/User"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";

export default function App() {
  document.title = "textY"
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<User />} />
      </Routes>
      <About/>
    </BrowserRouter>
  );
}
