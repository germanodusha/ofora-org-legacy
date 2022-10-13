import React from "react";
import Link from "next/link";
import { DesktopOnly } from "./struct/Media";

export default class FloatingTitle extends React.Component {
  state = {
    topOffset: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { topOffset } = this.state;
    return (
      <div ref="Wrapper" style={{ position: "relative" }}>
        <DesktopOnly>
          <div
            style={{
              ...wrapperStyle,
              transform: `rotateZ(-90deg) translate3d(-${topOffset}px, 0, 0)`,
              opacity: topOffset > 20 ? 1 : 0,
            }}
          >
            <div style={titleStyle}>{this.props.title}</div>
            <div>{this.props.author}</div>
          </div>
        </DesktopOnly>
      </div>
    );
  }

  handleScroll = () => {
    const viewportOffset = this.refs.Wrapper.getBoundingClientRect();
    const containerViewportOffset =
      this.refs.Wrapper.parentElement.parentElement.getBoundingClientRect();
    const spaceBelow = window.innerHeight - viewportOffset.bottom;
    const containerSpaceBelow =
      containerViewportOffset.bottom - window.innerHeight;
    const distanceBottom = window.innerHeight / 2 + 130;

    if (spaceBelow < distanceBottom) return;
    if (containerSpaceBelow < -100) return;
    this.setState({ topOffset: spaceBelow - distanceBottom });
  };
}

const wrapperStyle = {
  textAlign: "center",
  fontFamily: "IntervalBook, monospace",
  fontSize: 13,
  width: 500,
  top: 130,
  left: -185,
  position: "absolute",
  pointerEvents: "none",
  opacity: 1,
  transition: ".3s opacity .1s",
  lineHeight: "1.3em",
};

const titleStyle = {
  marginBottom: 5,
  fontFamily: "IntervalBold, monospace",
};
