import React from "react";

import ImageGridItem from "./ImageGridItem";

export default class ImageGrid extends React.Component {
  render() {
    if (!this.props.items) return null;
    return (
      <div className="root">
        {this.renderItems()}
        <div className="image-grid-item" style={{ marginBottom: 0 }} />
        <div className="image-grid-item" style={{ marginBottom: 0 }} />
        <div className="image-grid-item" style={{ marginBottom: 0 }} />
        <style jsx>{`
          .root {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 70px;
          }
        `}</style>
      </div>
    );
  }

  renderItems = () =>
    this.props.items.map((item) => {
      if (!this.props.category) {
        return <ImageGridItem {...item} />;
      }
      if (!item.data.category.data) return false;
      if (this.props.category == item.data.category.data.name[0].text) {
        return <ImageGridItem {...item} />;
      }
    });
}
