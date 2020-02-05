import React, { Component } from "react";

export default class Infocard extends Component {
  render() {
    return (
      <section id="info-card">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-6" id="1234">
              <h3>Column 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt distinctio unde alias culpa tenetur reprehenderit
                corporis, accusamus facilis, voluptatum molestias natus qui quo
                earum. Quidem facilis ullam excepturi perferendis obcaecati!
              </p>
            </div>
            <div className="col-lg-6">
              "Column 2"
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
