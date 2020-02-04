import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homecontainer from "./containers/Homecontainer";
import Blogcontainer from "./containers/Blogcontainer";


function App() {
  return (
    <div>
      <Navbar />
     <Homecontainer />
     <Blogcontainer />
    </div>
  );
}

export default App;
