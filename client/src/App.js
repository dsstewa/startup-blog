import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import Blog from "./components/Blog";
function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <Blog />
    </div>
  );
}

export default App;
