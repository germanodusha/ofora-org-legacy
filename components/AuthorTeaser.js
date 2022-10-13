import React from "react";
import P from "./base/Paragraph";
import Image from "./base/Image";
import { RichText } from "prismic-reactjs";

export default class AuthorTeaser extends React.Component {
  render() {
    const { author, style } = this.props;
    if (!author.data) return false;
    const bio = author.data.bio;
    return (
      <P style={style}>
        <span style={wrapperStyle}>
          <Image {...author.data.photo} style={imageStyle} />
          <div style={{ marginTop: "-1em" }}>{RichText.render(bio)}</div>
        </span>
      </P>
    );
  }
}

const wrapperStyle = {
  display: "flex",
  fontFamily: "IntervalBook, monospace",
  fontSize: 13,
  alignItems: "flex-start",
  lineHeight: "1.3em",
};

const imageStyle = {
  minWidth: 130,
  width: 130,
  marginRight: 20,
};
