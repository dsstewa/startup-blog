import React, { Component } from "react";
import Blog from "./Blog";
import Blogheader from "./Blogheader";

export default class Blogs extends Component {
  render() {
    const posts = this.props.blogPosts.map(post => (
      <Blog
        key={post.id}
        subject={post.subject}
        content={post.content}
        date={post.created_at}
        name={`${post.firstname} ${post.lastname}`}
      />
    ));
    return (
      <section id="blog-section" class="bg-light text-muted py-5">
        <div className="container">
          <div className="col text-left">{posts}</div>
        </div>
      </section>
    );
  }
}
