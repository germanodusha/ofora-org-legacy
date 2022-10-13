import React from "react";

export default class CategorySelectorItem extends React.Component {
  state = {
    hover: false,
  };

  render() {
    const { name } = this.props;
    return (
      <a
        href="#"
        style={wrapperStyle}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        onClick={this.handlePress}
      >
        {name} (<span style={{ marginLeft: ".5em" }}>);</span>
        <span style={this.checkStyle()}>X</span>
      </a>
    );
  }

  checkStyle = () => {
    if (this.state.hover) return checkHoverStyle;
    if (this.props.selected) return checkSelectedStyle;
    return checkStyle;
  };

  handlePress = () => {
    if (this.props.selected) return this.props.onClick(false);
    this.props.onClick(this.props.name);
  };
}

const wrapperStyle = {
  display: "inline-block",
  marginRight: 10,
  position: "relative",
  textDecoration: "none",
  color: "black",
  whiteSpace: "nowrap",
};

const checkStyle = {
  position: "absolute",
  right: ".59em",
  opacity: 0,
};
const checkHoverStyle = {
  ...checkStyle,
  color: "rgb(0,17,254)",
  opacity: 1,
};
const checkSelectedStyle = {
  ...checkStyle,
  color: "black",
  opacity: 1,
};
