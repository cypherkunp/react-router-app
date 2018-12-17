import React, { Component } from "react";

// Input property: liked: boolean
class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
      />
    );
  }
}

export default Like;
