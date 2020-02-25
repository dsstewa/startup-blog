import React, { Component } from "react";
import Blog from "./Blog";
import Editblog from "./Editblog";

export default class Blogs extends Component {
  editBlogPost() {
    console.log("hit the edit button");
  }

  filterPosts = () => {
    console.log("Hit the filterPosts");
    const postsFiltered = this.props.blogPosts;
    return postsFiltered;
  };

  render() {
    debugger;
    const posts = this.props.blogPosts.map(post => {
      if (post.editing === true) {
        return (
          <Editblog
            key={post.id}
            post={post}
            updateBlogPost={this.props.updateBlogPost}
          />
        );
      } else {
        return (
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
        );
      }
    });

    return (
      <section id='blog-section' className='bg-light text-muted py-5'>
        <div className='container'>
          <div className='form-check text-center'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='defaultCheck1'
              onChange={this.filterPosts}
            />
            <label className='form-check-label' for='defaultCheck1'>
              Default checkbox
            </label>
          </div>

          <div className='col text-left'>{posts}</div>
        </div>
      </section>
    );
  }
}
