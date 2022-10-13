import React from "react";
import P from "./Paragraph";
import { MobileOnly, DesktopOnly } from "../struct/Media";

const NotedParagraph = ({ text, note, style }) => (
  <div style={{ ...baseStyle, ...style }}>
    <P>{text}</P>
    <div className="note">
      <P style={noteStyle}>{note}</P>
    </div>
    <style jsx>{`
      @media only screen and (min-width: 752px) {
        .note {
          position: absolute;
          right: 0;
          top: 0;
          width: 160px;
        }
      }
    `}</style>
  </div>
);

const baseStyle = {
  position: "relative",
  paddingBottom: 1,
};

const noteStyle = {
  fontSize: 12,
  padding: 0,
  marginTop: "-1em",
  fontFamily: "'Source Serif Pro', serif",
};

export default NotedParagraph;
