import React from "react";
import MenuLink from "./MenuLink";
import { withState, withHandlers, lifecycle, compose } from "recompose";
import { getCategories } from "../lib/backend";

const enhance = compose(
  lifecycle({
    componentDidMount() {
      const self = this;
      getCategories().then((categories) => this.setState(categories));
    },
  })
);

const SiteMap = ({ style, categories }) => (
  <div className="wrapper">
    <div>
      <span className="title">/Mapa do site</span>
      <br />
      <br />
      <br />
    </div>
    <div className="content" style={style}>
      <div>
        <div>
          <MenuLink href="/o-que-e">O que é</MenuLink>
        </div>
        <br />
        <br />
        <div>
          <MenuLink href="/o-que-e#about">Sobre;</MenuLink>
        </div>
        <div>
          <MenuLink href="/o-que-e#info">Informações gerais;</MenuLink>
        </div>
      </div>
      <div>
        <div>
          <MenuLink href={{ pathname: "/acoes" }}>Ações & imaginações</MenuLink>
        </div>
        <br />
        <br />
        {categories &&
          categories.map((p) => (
            <div key={p.id}>
              <MenuLink
                href={{
                  pathname: "/acoes",
                  query: { initialCategory: p.data.name[0].text },
                }}
              >
                {p.data.name[0].text};
              </MenuLink>
            </div>
          ))}
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        font-family: IntervalBook, monospace;
        font-size: 16px;
        line-height: 1.3;
        margin-bottom: 20px;
      }
      .title {
        margin-bottom: 60px;
      }
      .content {
        display: flex;
      }
      .content > div {
        width: 50%;
      }
      @media only screen and (min-width: 752px) {
        .content {
          width: 600px;
          margin: 0 auto;
        }
        .title {
          margin-left: 60px;
        }
      }
    `}</style>
  </div>
);

export default enhance(SiteMap);
