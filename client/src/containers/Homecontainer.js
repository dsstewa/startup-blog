import React, { Component } from "react";
import Infosection from "../components/Infosection";
import Signup from "../components/Signup";
import { connect } from "react-redux";
import Infocard from "../components/infocards/democard";
import {fetchBlogPosts } from "../actions/fetchBlogPosts"

class Homecontainer extends Component {

  handleOnClick(event) { 
    this.props.fetchBlogPosts()
  }

  render() {
    return (
      <div>
        <Infosection addUser={this.props.addUser} />
        <button onClick={(event) => this.handleOnClick(event)}> Click to fetch </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: payload => dispatch({ type: "ADD_USER", payload }),
  fetchBlogPosts: () => dispatch(fetchBlogPosts())
});

export default connect(null, mapDispatchToProps)(Homecontainer);
