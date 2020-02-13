import React, { Component } from "react";
import NewBlog from "../components/blog/Newblog";
import { connect } from "react-redux";
import { newBlogPosts } from "../actions/index";

class Newblogpost extends Component {
  render() {
    return (
      <div>
        <NewBlog newBlogPost={this.props.newBlogPosts} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  newBlogPosts: data => dispatch(newBlogPosts(data))
});

export default connect(
  null,
  mapDispatchToProps
)(Newblogpost);
