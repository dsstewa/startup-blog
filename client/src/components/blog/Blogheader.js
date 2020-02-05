import React, { Component } from "react";

export default class Blogheader extends Component {
  render() {
    return (
      <section id="blog-head-section">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="p-5">
                <h1 className="display-4">Blog</h1>
                <p className="lead">
                  Please take a look at the following updates for Vendrix!
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
