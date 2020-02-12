import React, { Component } from "react";
import Blogheader from "../components/blog/Blogheader";
import {fetchBlogPosts } from "../actions/fetchBlogPosts"
import { connect } from "react-redux";
import Blogs from "../components/blog/Blogs"


 class Blogcontainer extends Component {
  componentDidMount() { 
    this.props.fetchBlogPosts()
  }
 
  render() {
    console.log(this.props)
    return (
      <div>
        <Blogheader />
        <Blogs blogPosts={this.props.blogPosts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    blogPosts: state.blogposts
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBlogPosts: () => dispatch(fetchBlogPosts())
});


export default connect(mapStateToProps, mapDispatchToProps)(Blogcontainer);

