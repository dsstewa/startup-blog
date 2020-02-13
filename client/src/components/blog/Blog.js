import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div className="card mt-4">
        <h5 className="card-header">{this.props.subject}</h5>
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
