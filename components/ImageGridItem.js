import React from "react";
import Link from "./base/Link";
import Image from "./base/Image";
import moment from "moment";

export default class ImageGridItem extends React.Component {
  render() {
    const {
      data,
      uid,
      data: { date },
    } = this.props;
    const title = data.title instanceof Array ? data.title[0].text : false;
    const author = data.author.data ? data.author.data.name[0].text : false;
    const category = this.props.data.category.data
      ? this.props.data.category.data.name[0].text
      : false;
    const types = {
      article: "artigo",
      story: "materia",
      pictures_and_video: "fotoevideo",
      post: "post",
    };

    return (
      <div className="image-grid-item">
        <Link href={{ pathname: `/acoes/${uid}` }}>
          <div style={imageStackStyle} className="underline-hover">
            {this.renderPhotos()}
          </div>
          <h3 style={titleStyle}>
            <span style={headerStyle}>
              {moment(date).format("DD.MM.YY")} /{category}
            </span>
            <br />
            <span>{title}</span>
            {author && (
              <span
                style={{ fontWeight: 400, display: "block", paddingTop: 3 }}
              >
                {author}
              </span>
            )}
          </h3>
        </Link>
        <style jsx global>{`
          .image-grid-item {
            width: 300px;
            margin: 0 auto 50px;
          }
          .image-grid-item:hover {
            color: rgb(0, 17, 254);
          }
          .underline-hover {
            position: relative;
          }
          .image-grid-item:hover .underline-hover::before {
            content: "";
            position: absolute;
            bottom: -14px;
            height: 11px;
            background: rgb(0, 17, 254);
            width: 100%;
          }
          @media only screen and (min-width: 600px) {
            .image-grid-item {
              width: 220px;
              margin: 0 5px 50px;
            }
          }
          @media only screen and (min-width: 752px) {
            .image-grid-item {
              width: 200px;
            }
          }
          @media only screen and (min-width: 980px) {
            .image-grid-item {
              width: 210px;
            }
          }
          @media only screen and (min-width: 1100px) {
            .image-grid-item {
              width: 240px;
            }
          }
          @media only screen and (min-width: 1280px) {
            .image-grid-item {
              width: 280px;
            }
          }
        `}</style>
      </div>
    );
  }

  renderPhotos = () => {
    const photos = this.props.data.photos || [{ photo: this.props.data.cover }];
    const photosOrVideo =
      photos.length < 1
        ? this.props.data.videos.map((video, index) => ({
            photo: {
              [`${index === 0 ? "cover" : "thumb"}`]: {
                url: video.video.thumbnail_url,
                dimensions: {
                  height: video.video.height,
                  width: video.video.width,
                },
              },
            },
          }))
        : photos;

    return (
      <div>
        {photosOrVideo[2] && (
          <div
            style={{
              ...imageWrapperStyle,
              transform: "translate3d(21px, -21px, 0)",
            }}
          >
            <Image {...photosOrVideo[2].photo.thumb} style={imageStyle} />
          </div>
        )}
        {photosOrVideo[1] && (
          <div
            style={{
              ...imageWrapperStyle,
              transform: "translate3d(7px, -7px, 0)",
            }}
          >
            <Image
              {...photosOrVideo[1].photo.thumb}
              style={imageStyle}
              loadDelay={200}
            />
          </div>
        )}
        <div
          style={{
            ...imageWrapperStyle,
            transform: photos[1] && "translate3d(-7px, 7px, 0)",
          }}
        >
          <Image
            {...photosOrVideo[0].photo.cover}
            style={imageStyle}
            loadDelay={400}
          />
        </div>
      </div>
    );
  };
}

const itemWidth = 280;

const headerStyle = {
  fontFamily: "IntervalBook, monospace",
  fontSize: 13,
  fontWeight: 400,
  lineHeight: "1.3em",
};
const imageStackStyle = {
  paddingBottom: "85%",
  position: "relative",
};
const imageWrapperStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const imageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
};
const titleStyle = {
  fontFamily: "'Source Serif Pro', serif",
  fontSize: 24,
  fontWeight: 700,
  marginTop: 20,
};
