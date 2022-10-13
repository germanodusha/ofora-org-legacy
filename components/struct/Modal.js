import React from "react";

export default class MenuModal extends React.Component {
  render() {
    const { visible, children } = this.props;
    return (
      <div
        className="modal"
        style={
          visible
            ? { ...showStyle, ...this.props.style }
            : { ...hideStyle, ...this.props.style }
        }
        onClick={this._onBgClick}
      >
        {visible && children}
      </div>
    );
  }

  _onBgClick = (event) => {
    if (!event.target.classList.contains("modal"))
      return console.log(event.target);
    this.props.onBgClick && this.props.onBgClick(event);
    event.stopPropagation();
  };
}

const baseStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
  transition: "0.1s opacity ease-out",
};

const hideStyle = {
  ...baseStyle,
  opacity: 0,
  pointerEvents: "none",
  transition: "0.1s opacity ease-in",
  // transform: 'translate3d(0,-100px,0px)',
};

const showStyle = {
  ...baseStyle,
  opacity: 1,
  // transform: 'translate3d(0,0,0px)',
  // transition: '0.7s all ease-out'
};
