import React, { Component } from "react";

export default class HomeSection extends Component {
  render() {
    return (
      <header id="home-seciton">
        <div className="dark-overlay">
          <div className="home-inner">
            <div className="container">
              <div className="row">
                <div className="call-lg-8">
                  <h1 className="display-4">
                    Build <strong>Social Profiles </strong>and gain revenue &
                    profits
                  </h1>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Numquam vero vel totam, perspiciatis modi in!
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Numquam vero vel totam, perspiciatis modi in!
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Numquam vero vel totam, perspiciatis modi in!
                    </div>
                  </div>
                </div>
                <div className="col-lg-1"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
