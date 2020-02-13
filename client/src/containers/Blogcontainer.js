import React, { Component } from "react";
import Blogheader from "../components/blog/Blogheader";
import { fetchBlogPosts, deleteBlogPost } from "../actions/index";
import { connect } from "react-redux";
import Blogs from "../components/blog/Blogs";

class Blogcontainer extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  render() {
    return (
      <div>
        <Blogheader />
        <Blogs
          blogPosts={this.props.blogPosts}
          deleteBlogPost={this.props.deleteBlogPost}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogPosts: state.blogposts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBlogPosts: () => dispatch(fetchBlogPosts()),
    deleteBlogPost: post => deleteBlogPost(post)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blogcontainer);
