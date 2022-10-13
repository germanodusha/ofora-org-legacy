import React from "react";
import ContentWrapper from "./struct/ContentWrapper";
import Title from "./Title";
import MenuLink from "./MenuLink";
import ImageGalery from "./base/ImageGalery";
import moment from "moment";
import { Date } from "prismic-reactjs";

export default class CoverMobile extends React.Component {
  render() {
    const doc = this.props.doc;
    const { author, photos, category, videos, date } = doc.data;
    const authorName = author.data && author.data.name[0].text;
    const categoryName = category.data && category.data.name[0].text;

    return (
      <ContentWrapper style={coverWrapperStyle}>
        <Title>
          <MenuLink href={{ pathname: "/acoes" }}>
            /Ações & imaginações
          </MenuLink>{" "}
          <MenuLink
            href={{
              pathname: "/acoes",
              query: { initialCategory: categoryName },
            }}
          >{`/${categoryName}`}</MenuLink>
        </Title>
        <div>
          <ImageGalery
            media={{ videos, photos }}
            style={{ flex: 1, textAlign: "right", position: "relative" }}
          />
          <h1 style={h1Style}>{doc.data.title[0].text}</h1>
        </div>
        <div style={coverBotStyle}>
          <p style={dateStyle} />
          <p style={authorStyle}>
            {authorName && (
              <span>
                <span style={{ fontSize: 24, fontWeight: 600 }}>Por</span>{" "}
                {authorName}
              </span>
            )}
          </p>
          <p style={dateStyle}>{moment(date).format("DD.MM.YY")}</p>
        </div>
      </ContentWrapper>
    );
  }
}

const invertStyle = {
  fontFamily: "'Source Serif Pro', serif",
};

const coverWrapperStyle = {
  ...invertStyle,
  flexDirection: "column",
  justifyContent: "space-between",
};

const coverBotStyle = {
  justifyContent: "space-between",
  paddingTop: 10,
};

const h1Style = {
  fontSize: 29,
  fontWeight: 600,
  margin: 0,
  flex: 0.56,
  alignSelf: "flex-end",
  marginBottom: "-0.30em",
};

const authorStyle = {
  fontSize: 29,
  marginTop: 20,
  zIndex: 1,
};

const dateStyle = {
  fontSize: 29,
  margin: 0,
};
