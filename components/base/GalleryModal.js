import React from "react";
import Video from "./Video";
import Image from "./Image";
import Modal from "../struct/Modal";
import Gallery from "./Gallery";

const GalleryModal = ({
  items,
  onBgClick,
  visible,
  wrapperProps,
  onChangeItem,
  ...props
}) => (
  <Modal
    visible={visible}
    style={{ zIndex: 100, background: "rgba(0,0,0,1)", padding: 20 }}
    onBgClick={onBgClick}
  >
    <div className="modalWrapper">
      <Gallery
        {...props}
        items={items}
        itemRender={ItemRender}
        wrapperProps={{ ...wrapperProps, style: galleryStyle }}
        onChangeItem={onChangeItem}
      />
    </div>
    <style jsx>{`
      .modalWrapper {
        height: 100%;
        box-sizing: border-box;
      }
      @media only screen and (min-width: 752px) {
        .modalWrapper {
          padding: 20px;
        }
      }
    `}</style>
  </Modal>
);

const ItemRender = ({ subtitle, photo, video, index, length }) => (
  <div style={wrapperStyle} className="modal">
    <div className="sidebar" style={sidebarStyle}>
      <div style={{ fontFamily: "IntervalBold, monospace", marginBottom: 20 }}>
        {index}/{length}
      </div>
      {subtitle && <div>{subtitle}</div>}
    </div>
    <div className="mediaWrapper" style={{ display: video ? "block" : "flex" }}>
      {photo && <Image {...photo} />}
      {video && <Video {...video} />}
    </div>
    <div className="sidebar" style={{ ...sidebarStyle, textAlign: "right" }}>
      <svg
        width={25}
        height={25}
        style={{ cursor: "pointer", pointerEvents: "all" }}
        className="modal"
      >
        <g>
          <line
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            y2={25}
            x2={25}
            y1={0}
            x1={0}
            stroke="#FFF"
            fill="none"
            strokeWidth={2}
          />
          <line
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            y2={25}
            x2={0}
            y1={0}
            x1={25}
            stroke="#FFF"
            fill="none"
            strokeWidth={2}
          />
        </g>
      </svg>
    </div>
    <style jsx>{`
      @media only screen and (min-width: 752px) {
        .sidebar {
          max-width: 200px;
          min-width: 200px;
        }
        .mediaWrapper {
          margin: 20px
          text-align: center;
          max-height: 80%;
          align-self: center;
          flex: 1
        }
      }
    `}</style>
  </div>
);

const galleryStyle = {
  display: "flex",
  height: "100%",
  position: "relative",
};
const wrapperStyle = {
  maxHeight: "100%",
  display: "flex",
  width: "100%",
};
const sidebarStyle = {
  fontSize: 13,
  fontFamily: "IntervalBook, monospace",
  pointerEvents: "none",
  textAlign: "left",
};
export default GalleryModal;
