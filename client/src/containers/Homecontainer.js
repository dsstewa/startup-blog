import React, { Component } from "react";
import Infosection from "../components/Infosection";
import Signup from "../components/Signup";
import { connect } from "react-redux";
import Infocard from "../components/infocards/democard";

class Homecontainer extends Component {
  render() {
    return (
      <div>
        <Infosection addUser={this.props.addUser} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: payload => dispatch({ type: "ADD_USER", payload })
});

export default connect(null, mapDispatchToProps)(Homecontainer);
