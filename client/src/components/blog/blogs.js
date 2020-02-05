import React, { Component } from "react";
import Blog from "./Blog";
import Blogheader from "./Blogheader";

export default class Blogs extends Component {
  render() {
    return (
      <section id="blog-section" class="bg-light text-muted py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-10 mx-auto">
              <Blogheader />
              <Blog />
              <Blog />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
