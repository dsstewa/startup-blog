import React, { Component } from "react";

export default class Newblogpost extends Component {
  render() {
    return (
      <section className="new-blog-post">
        <div className="container">
          <form>
            <div class="form-group p-4">
              <label for="blogsubject">Subject</label>
              <input class="form-control" id="eblogsubject" rows="1"></input>
              <label for="blogbody">Blog Content</label>
              <textarea class="form-control" id="blogbody" rows="10"></textarea>
              <br></br>
              <button
                type="button"
                value="Submit"
                className="btn btn-dark p-4 btn-block"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
