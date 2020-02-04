import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <section id="explore-head-section">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="p-5">
                <h1 className="display-4">Blog</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt temporibus numquam unde odit quos esse impedit labore
                  voluptatum a dolor.
                </p>
                <a href="" className="btn btn-outline-secondary">
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
