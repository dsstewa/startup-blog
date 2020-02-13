import React, { PureComponent } from "react";

export default class Newblog extends PureComponent {
  constructor() {
    super();
    this.state = {
      subject: "",
      content: ""
    };
  }

  handleChange = event => {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.newBlogPost(this.state);
    this.setState = {
      subject: "",
      content: ""
    };
  };

  render() {
    return (
      <section className="new-blog-post">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div class="form-group p-4">
              <label for="blogsubject">Subject</label>
              <input
                class="form-control"
                id="subject"
                name="subject"
                rows="1"
                onChange={this.handleChange}
              ></input>
              <label for="blogbody">Blog Content</label>
              <textarea
                class="form-control"
                id="content"
                name="content"
                onChange={this.handleChange}
                rows="10"
              ></textarea>
              <br></br>
              <button
                type="submit"
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
