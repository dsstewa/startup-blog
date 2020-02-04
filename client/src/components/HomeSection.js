import React, { Component } from "react";

export default class HomeSection extends Component {
  render() {
    return (
      <header id="home-section">
        <div className="dark-overlay">
          <div className="home-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 d-none d-lg-block">
                  <h1 className="display-4">
                    Build <strong>Social Profiles </strong>and gain revenue &
                    profits
                  </h1>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Numquam vero vel totam, perspiciatis modi in!
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Numquam vero vel totam, perspiciatis modi in!
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Numquam vero vel totam, perspiciatis modi in!
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card bg-primary text-center card-form">
                    <div className="card-body">
                      <h3>Sign up Today</h3>
                      <p>for Vendrix updates!</p>
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="firstname"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="lastname"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="email"
                          />
                        </div>
                        <input
                          type="submit"
                          value="Submit"
                          className="btn btn-outline-light btn-block"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
