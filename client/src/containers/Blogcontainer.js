import React, { Component } from "react";
import Blogheader from "../components/blog/Blogheader";
import { fetchBlogPosts, deleteBlogPost } from "../actions/fetchBlogPosts";
import { connect } from "react-redux";
import Blogs from "../components/blog/Blogs";

class Blogcontainer extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  render() {
    console.log(this.props);
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

const mapDispatchToProps = dispatch => ({
  fetchBlogPosts: () => dispatch(fetchBlogPosts()),
  deleteBlogPost: () => dispatch(deleteBlogPost())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blogcontainer);
