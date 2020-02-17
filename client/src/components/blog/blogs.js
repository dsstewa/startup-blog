import React, { Component } from "react";
import Blog from "./Blog";
import Newblog from "./Newblog";

export default class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }
  render() {
    const posts = this.props.blogPosts.map(post => (
      <Blog
        key={post.id}
        id={post.id}
        subject={post.subject}
        content={post.content}
        date={post.created_at}
        name={`${post.firstname} ${post.lastname}`}
        deleteBlogPost={this.props.deleteBlogPost}
        editBlogPost={this.props.editBlogPost}
      />
    ));
    const postEdits = this.props.blogPosts.map(post => (
      <Newblog
        key={post.id}
        id={post.id}
        subject={post.subject}
        content={post.content}
        date={post.created_at}
        name={`${post.firstname} ${post.lastname}`}
        deleteBlogPost={this.props.deleteBlogPost}
        editBlogPost={this.props.editBlogPost}
      />
    ));
    return (
      <section id="blog-section" className="bg-light text-muted py-5">
        <div className="container">
          <div className="col text-left">{postEdits}</div>
        </div>
      </section>
    );
  }
}
