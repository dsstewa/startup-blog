import React, { Component } from 'react';
import Blog from './Blog';
import Editblog from './Editblog';

export default class Blogs extends Component {
  state = {
    checked: false
  };

  handleOnChange = () => {
    if (this.state.checked === true) {
      this.setState({
        checked: false
      });
    } else {
      this.setState({
        checked: true
      });
    }
  };

  sortPosts = () => {
    if (this.state.checked === true) {
      const aPosts = [...this.props.blogPosts];
      const bPosts = aPosts.sort(function(a, b) {
        const nameA = a.subject.toUpperCase(); // ignore upper and lowercase
        const nameB = b.subject.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });

      return bPosts;
    } else {
      return this.props.blogPosts;
    }
  };

  render() {
    const posts = this.sortPosts().map(post => {
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
      <section id="blog-section" className="bg-light text-muted py-5">
        <div className="container">
          <div className="form-check text-center">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
              onChange={this.handleOnChange}
            />
            <label className="form-check-label" for="defaultCheck1">
              Default checkbox
            </label>
          </div>

          <div className="col text-left">{posts}</div>
        </div>
      </section>
    );
  }
}
