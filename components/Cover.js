import React from "react";
import ContentWrapper from "./struct/ContentWrapper";
import Title from "./Title";
import MenuLink from "./MenuLink";
import ImageGalery from "./base/ImageGalery";
import moment from "moment";
import { Consumer } from "../components/base/Context";

export default class PhotosAndVideosCover extends React.Component {
  render() {
    const doc = this.props.doc;
    const { author, photos, category, videos, date } = doc.data;
    const authorName = author.data && author.data.name[0].text;
    const categoryName = category.data && category.data.name[0].text;

    return (
      <Consumer>
        {(context) => {
          const lang = context ? context.lang : "br";
          return (
            <ContentWrapper style={coverWrapperStyle}>
              <Title>
                <MenuLink href={{ pathname: "/" }}>
                  {lang === "br"
                    ? "/Ações & imaginações:"
                    : "/Acts & imaginations:"}
                </MenuLink>{" "}
                <MenuLink
                  href={{
                    pathname: "/",
                    query: { initialCategory: categoryName },
                  }}
                >{`/${categoryName}`}</MenuLink>
              </Title>
              <div style={coverMidStyle}>
                <h1 style={h1Style}>{doc.data.title[0].text}</h1>
                <ImageGalery
                  media={{ videos, photos }}
                  style={{
                    flex: 1,
                    textAlign: "right",
                    position: "relative",
                    maxWidth: "50%",
                    minWidth: "40%",
                  }}
                />
              </div>
              <div style={coverBotStyle}>
                <p style={dateStyle} />
                <p style={authorStyle}>
                  {authorName && <span>por {authorName}</span>}
                </p>
                <p style={dateStyle}>{moment(date).format("DD.MM.YY")}</p>
              </div>
            </ContentWrapper>
          );
        }}
      </Consumer>
    );
  }
}

const invertStyle = {
  fontFamily: "'Source Serif Pro', serif",
};
const coverWrapperStyle = {
  ...invertStyle,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
const coverMidStyle = {
  display: "flex",
  maxHeight: "calc(90% - 130px)",
  justifyContent: "space-between",
};
const coverBotStyle = {
  display: "flex",
  justifyContent: "space-between",
  paddingTop: 10,
};

const h1Style = {
  paddingRight: 50,
  fontSize: 41,
  fontWeight: 600,
  alignSelf: "center",
  margin: 0,
  flex: 0.56,
  marginBottom: "-0.30em",
};

const authorStyle = {
  fontSize: 41,
  textAlign: "center",
  margin: 0,
  maxWidth: "30%",
  zIndex: 1,
};

const dateStyle = {
  width: 200,
  textAlign: "right",
  fontSize: 41,
  margin: 0,
};
