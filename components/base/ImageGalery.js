import React from "react";
import { withState, withHandlers, compose, withProps } from "recompose";
import Image from "./Image";
import Video from "./Video";
import MenuLink from "../MenuLink";
import GalleryModal from "./GalleryModal";
import Gallery from "./Gallery";

export const ImageGalery = ({
  toggleVideoModal,
  togglePhotoModal,
  videoGaleryVisible,
  setCurrentVideo,
  currentVideo,
  photoGaleryVisible,
  setCurrentPhoto,
  currentPhoto,
  media: { photos, videos },
  single,
  ...props
}) => (
  <div {...props} className={`galeryCover ${single && "galeryCoverSingle"}`}>
    {photos.length > 0 ? (
      <Gallery
        items={photos}
        itemRender={(item) => (
          <Image
            {...item.photo}
            onClick={photos.length > 1 && togglePhotoModal}
          />
        )}
        wrapperProps={{
          style: { height: "100%", cursor: photos.length > 1 && "pointer" },
        }}
        onChange={(i) => setCurrentPhoto(i)}
      />
    ) : (
      <Gallery
        items={videos}
        itemRender={(item) => <Video {...item.video} />}
        wrapperProps={{ style: { height: "100%", cursor: "pointer" } }}
        onChange={(i) => setCurrentVideo(i)}
      />
    )}
    {!single && (
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        {photos.length > 1 && (
          <MenuLink onClick={togglePhotoModal}>Ver imagens</MenuLink>
        )}
        {videos.length > 1 || (videos.length === 1 && photos.length > 0) ? (
          <MenuLink onClick={toggleVideoModal} style={{ marginLeft: 20 }}>
            Ver vídeos
          </MenuLink>
        ) : null}
      </div>
    )}
    <GalleryModal
      items={photos}
      visible={photoGaleryVisible}
      onBgClick={togglePhotoModal}
      initialItem={currentPhoto}
    />
    <GalleryModal
      items={videos}
      visible={videoGaleryVisible}
      onBgClick={toggleVideoModal}
      initialItem={currentVideo}
    />
    <style jsx global>{`
      .galeryCover {
        padding-top: 1.3em;
        font-size: 19px;
        position: relative;
      }
      @media only screen and (min-width: 752px) {
        .galeryCover {
          font-size: 24px;
        }
        .galeryCover .galleryNav {
          opacity: 0;
        }
        .galeryCover > div:hover .galleryNav {
          opacity: 1;
        }
      }
      .galeryCoverSingle {
        padding-top: 0;
      }
    `}</style>
  </div>
);

const enhance = compose(
  withState("photoGaleryVisible", "setPhotoGaleryVisible", false),
  withState("currentPhoto", "setCurrentPhoto", 0),
  withState("videoGaleryVisible", "setVideoGaleryVisible", false),
  withState("currentVideo", "setCurrentVideo", 0),
  withHandlers({
    toggleVideoModal:
      ({ setVideoGaleryVisible, videoGaleryVisible }) =>
      (e) =>
        setVideoGaleryVisible(!videoGaleryVisible),
    togglePhotoModal:
      ({ setPhotoGaleryVisible, photoGaleryVisible }) =>
      (e) =>
        setPhotoGaleryVisible(!photoGaleryVisible),
  })
);

export default enhance(ImageGalery);
