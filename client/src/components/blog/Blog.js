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
              class="btn btn-danger pull-right"
              onClick={this.props.deleteBlogPost}
            >
              Delete Post
            </button>
          </h4>
        </div>

        <div className="card-body">
          <p className="card-text">{this.props.content}</p>
          <p class="card-text">
            <small class="text-muted">
              Post by: {this.props.name} {" on "} {this.props.date}
            </small>
          </p>
        </div>
      </div>
    );
  }
}
