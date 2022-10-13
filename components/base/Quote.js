import React from "react";
import P from "./Paragraph";

const CleanP = ({ children }) => (
  <P style={{ margin: 0, fontSize: "inherit", padding: 0, maxWidth: "auto" }}>
    {children}
  </P>
);

export default class Quote extends React.Component {
  render() {
    const { style, quote, source } = this.props;
    const sourceText = source.length && source;
    return (
      <div className="root">
        <div className="quote">
          <CleanP>{quote}</CleanP>
        </div>
        {sourceText ? (
          <div className="source">
            <CleanP>{sourceText}</CleanP>
          </div>
        ) : null}
        <style jsx>{`
          .root {
            margin-bottom: 2.5em;
          }
          .quote {
            font-size: 24px;
            font-family: "Source Serif Pro", serif;
            font-weight: 600;
          }
          .source {
            font-size: 13px;
            font-family: IntervalBook, monospace;
            line-height: 1.3em;
            margin-top: 16px;
          }
          @media only screen and (min-width: 752px) {
            .root {
              max-width: 600px;
              margin: 0 auto 2.5em;
              padding: 0 200px;
            }
            .quote {
              margin-left: 150px;
            }
            .source {
              padding-left: 215px;
            }
          }
        `}</style>
      </div>
    );
  }
}

const sourceStyle = {
  fontSize: 13,
  fontFamily: "IntervalBook, monospace",
  marginTop: 26,
  lineHeight: "1.3em",
};
