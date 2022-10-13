import React from "react";
import { withState, withHandlers, lifecycle, compose } from "recompose";

const enhance = compose(
  withState("selected", "setSelected", 0),
  withHandlers({
    handleRightClick:
      ({ items, selected, setSelected, onChange }) =>
      (e) => {
        const nextItem = selected < items.length - 1 ? selected + 1 : 0;
        setSelected(null);
        setTimeout((e) => setSelected(nextItem), 1);
        onChange && onChange(nextItem);
      },
    handleLeftClick:
      ({ items, selected, setSelected, onChange }) =>
      (e) => {
        const nextItem = selected > 0 ? selected - 1 : items.length - 1;
        setSelected(null);
        setTimeout((e) => setSelected(nextItem), 1);
        onChange && onChange(nextItem);
      },
  }),
  lifecycle({
    componentDidMount() {
      this.handleKeyDown = (e) => {
        e.keyCode === 37 && this.props.handleLeftClick();
        e.keyCode === 39 && this.props.handleRightClick();
      };
      document.addEventListener("keydown", this.handleKeyDown);
      if (this.props.initialItem)
        this.props.setSelected(this.props.initialItem);
    },
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown);
    },
  })
);

const Gallery = ({
  items,
  wrapperProps,
  itemRender,
  selected,
  handleRightClick,
  handleLeftClick,
}) => {
  if (!items.length) return null;
  return (
    <div {...wrapperProps}>
      {items[selected] &&
        itemRender({
          ...items[selected],
          index: selected + 1,
          length: items.length,
        })}
      {selected !== 0 && (
        <span className="galleryNav left" onClick={handleLeftClick}>
          ←
        </span>
      )}
      {items.length > 1 && (
        <span className="galleryNav right" onClick={handleRightClick}>
          →
        </span>
      )}
      <style jsx>{`
        .galleryNav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 45px;
          font-family: Arial;
          cursor: pointer;
        }
        .galleryNav.right {
          right: -15px;
          left: auto;
        }
        .galleryNav {
          left: -15px;
        }
        @media only screen and (min-width: 752px) {
          .galleryNav {
            top: 51%;
            font-size: 90px;
          }
          .galleryNav.right {
            right: -28px;
          }
          .galleryNav.left {
            left: -28px;
          }
        }
      `}</style>
    </div>
  );
};

export default enhance(Gallery);
