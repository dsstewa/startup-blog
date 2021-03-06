import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Homecontainer from "./containers/Homecontainer";
import Blogcontainer from "./containers/Blogcontainer";
import Newblogpost from "./containers/Newblogpost";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Homecontainer} />
      <Route exact path="/blog" component={Blogcontainer} />
      <Route exact path="/blog/new" component={Newblogpost} />
    </Router>
  );
}

export default App;
