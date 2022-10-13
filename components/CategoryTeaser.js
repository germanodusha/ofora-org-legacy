import React from "react";

export default class CategoryTeaser extends React.Component {
  render() {
    const { category, style } = this.props;
    if (!category.data) return false;
    return (
      <div style={{ ...wrapperStyle, ...style }}>
        {category.data.name && (
          <p style={{ marginTop: 0 }}>/{category.data.name[0].text}</p>
        )}
        {category.data.description && (
          <p>{category.data.description[0].text}</p>
        )}
      </div>
    );
  }
}

const wrapperStyle = {
  textAlign: "right",
  fontFamily: "IntervalBook, monospace",
  fontSize: 13,
  lineHeight: "1.25em",
};
