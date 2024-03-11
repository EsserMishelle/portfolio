import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Footer from "./components";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
