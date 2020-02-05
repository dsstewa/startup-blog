import React, { Component } from "react";
import Blog from "./Blog";

export default class Blogs extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </div>
        </div>
      </div>
    );
  }
}
