import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4>
            {this.props.subject}{" "}
            <button
              type="button"
              className="btn btn-danger pull-right"
              onClick={() => this.props.deleteBlogPost(this.props.id)}
            >
              Delete Post
            </button>
          </h4>
        </div>

        <div className="card-body">
          <p className="card-text">{this.props.content}</p>
          <p className="card-text">
            <small className="text-muted">
              Post by: {this.props.name} {" on "} {this.props.date}
            </small>
          </p>
        </div>
      </div>
    );
  }
}
