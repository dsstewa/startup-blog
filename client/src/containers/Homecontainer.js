import React, { Component } from "react";
import Infosection from "../components/Infosection";
import { connect } from "react-redux";

import Blogcontainer from "./Blogcontainer";

class Homecontainer extends Component {
  render() {
    return (
      <div>
        <Infosection addUser={this.props.addUser} />
        <Blogcontainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: payload => dispatch({ type: "ADD_USER", payload })
});

export default connect(
  null,
  mapDispatchToProps
)(Homecontainer);
