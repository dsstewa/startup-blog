import React, { Component } from "react";
import Blogheader from "../components/blog/Blogheader";
import {
  fetchBlogPosts,
  deleteBlogPost,
  editBlogPost,
  updateBlogPost
} from "../actions/index";
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
          editBlogPost={this.props.editBlogPost}
          updateBlogPost={this.props.updateBlogPost}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogPosts: state.blogposts.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBlogPosts: () => dispatch(fetchBlogPosts()),
    deleteBlogPost: post => dispatch(deleteBlogPost(post)),
    editBlogPost: post => dispatch(editBlogPost(post)),
    updateBlogPost: post => dispatch(updateBlogPost(post))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blogcontainer);
