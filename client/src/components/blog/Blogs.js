import React, { Component } from "react";
import Blog from "./Blog";
import Editblog from "./Editblog";

export default class Blogs extends Component {
  editBlogPost() {
    console.log("hit the edit button");
  }
  render() {
    const posts = this.props.blogPosts.map(post => (
      <Blog
        key={post.id}
        editBlogPost={this.editBlogPost}
        id={post.id}
        subject={post.subject}
        content={post.content}
        date={post.created_at}
        name={`${post.firstname} ${post.lastname}`}
        deleteBlogPost={this.props.deleteBlogPost}
        editBlogPost={this.props.editBlogPost}
      />
    ));

    const posts2 = this.props.blogPosts.map(post => {
      if (post.editing === true) {
        return (
          <Editblog post={post} updateBlogPost={this.props.updateBlogPost} />
        );
      } else {
        return (
          <Blog
            key={post.id}
            editBlogPost={this.editBlogPost}
            id={post.id}
            subject={post.subject}
            content={post.content}
            date={post.created_at}
            name={`${post.firstname} ${post.lastname}`}
            deleteBlogPost={this.props.deleteBlogPost}
            editBlogPost={this.props.editBlogPost}
          />
        );
      }
    });

    return (
      <section id="blog-section" className="bg-light text-muted py-5">
        <div className="container">
          <div className="col text-left">{posts2}</div>
        </div>
      </section>
    );
  }
}
