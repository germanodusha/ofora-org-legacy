import React from "react";

export default class ContentWrapper extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        {this.props.children}
        <style jsx>{`
          div {
            padding: 20px;
            box-sizing: border-box;
          }
          @media only screen and (min-width: 752px) {
            div {
              padding: 21px 29px;
            }
          }
        `}</style>
      </div>
    );
  }
}

const wrapperStyle = {};
