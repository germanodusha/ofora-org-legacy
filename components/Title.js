import React from "react";

export default class Title extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx>{`
          div {
            font-family: "Source Serif Pro", serif;
            font-weight: 600;
            font-size: 29px;
            margin: 36px 0 0px 0px;
          }
          @media only screen and (min-width: 752px) {
            div {
              margin: 0 0 0 145px;
              font-size: 41px;
            }
          }
        `}</style>
      </div>
    );
  }
}
