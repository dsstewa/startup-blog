import React, { Component } from "react";
import Blog from "./Blog";

export default class Blogs extends Component {
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
      />
    ));
    return (
      <section id="blog-section" className="bg-light text-muted py-5">
        <div className="container">
          <div className="col text-left">{posts}</div>
        </div>
      </section>
    );
  }
}
