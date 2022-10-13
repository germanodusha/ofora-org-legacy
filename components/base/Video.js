import React from "react";

const handleRef = (node, autoplay) => {
  if (!node) return;
  const iframe = node.firstChild;
  iframe.src += autoplay ? "&autoplay=1" : null;
  iframe.style.position = "absolute";
  iframe.style.left = "0";
  iframe.style.top = "0";
  iframe.style.bottom = "0";
  iframe.style.right = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
};

export const Video = ({ html, height, width, autoplay, style }) => (
  <div
    dangerouslySetInnerHTML={{ __html: html }}
    ref={(n) => handleRef(n, autoplay)}
    style={{
      ...style,
      paddingTop: (height / width) * 100 + "%",
      position: "relative",
    }}
  />
);

export default Video;
