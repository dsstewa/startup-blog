import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homecontainer from "./containers/Homecontainer";
import Blogcontainer from "./containers/Blogcontainer";
import Newblogpost from "./components/blog/Newblogpost";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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
