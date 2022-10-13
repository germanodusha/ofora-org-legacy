import React from "react";
import Router from "next/router";
import Link from "./base/Link";

export default class MenuLink extends React.Component {
  state = {
    hover: false,
  };

  handleMouseEnter = () => {
    this.props.onMouseEnter && this.props.onMouseEnter(this.props.menuKey);
    this.setState({ hover: true });
  };
  handleMouseLeave = () => {
    this.props.onMouseLeave && this.props.onMouseLeave(this.props.menuKey);
    this.setState({ hover: false });
  };

  render() {
    return (
      <span
        style={{ ...wrapperStyle, ...this.props.style }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <span style={this.state.hover ? underlineStyle : {}} />
        <Link {...this.props} style={menuTextStyle} />
      </span>
    );
  }
}
const wrapperStyle = {
  position: "relative",
  display: "inline-block",
};
const menuTextStyle = {
  textDecoration: "none",
  position: "relative",
};

const underlineStyle = {
  borderBottom: "0.25em solid rgb(0,17,254)",
  position: "absolute",
  bottom: "0.13em",
  left: "0",
  right: "1.6%",
};
