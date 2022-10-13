import React from "react";
import LazyLoad from "react-lazyload";

export const SimpleImage = (props) => (
  <img {...props} style={{ ...baseStyle, ...props.style }} />
);

export const LazyImage = (props) => {
  const { dimensions, url, style, loadDelay, onClick } = props;
  let image = null;

  return (
    <LazyLoad
      height={dimensions.height}
      placeholder={
        <img
          width={dimensions.width}
          height={dimensions.height}
          style={{ ...lazyStyle, ...style }}
        />
      }
    >
      <img
        src={url}
        width={dimensions.width}
        height={dimensions.height}
        style={{ ...lazyStyle, ...style }}
        onLoad={() => loadTransform({ image, loadDelay })}
        ref={(el) => {
          image = el;
        }}
        onClick={onClick}
      />
    </LazyLoad>
  );
};

const loadTransform = ({ image, loadDelay }) => {
  setTimeout(() => {
    image.style.opacity = 1;
  }, 1 + loadDelay);
  setTimeout(() => {
    image.style.transform = "scale(1)";
  }, 1 + loadDelay);
};

export const Image = (props) =>
  props.dimensions ? <LazyImage {...props} /> : <SimpleImage {...props} />;

const baseStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  height: "auto",
  width: "auto",
  //overflow: 'hidden',
  //verticalAlign: 'middle',
  objectFit: "contain",
};

const lazyStyle = {
  ...baseStyle,
  opacity: 0,
  transform: "scale(1.2)",
  transition: ".2s opacity .1s linear, .4s transform ease-out",
};

export default Image;
