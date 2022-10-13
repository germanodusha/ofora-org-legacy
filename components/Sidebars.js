import React from "react";
import CategoryTeaser from "./CategoryTeaser";
import FloatingTitle from "./FloatingTitle";
import TagsTeaser from "./TagsTeaser";
import TecnicalData from "./TecnicalData";

export const Sidebars = (props) => {
  const { tags, data } = props.doc;
  const { category, author } = data;
  const title = data.title[0].text;
  const authorName = author.data && author.data.name[0].text;

  return (
    <div className="root">
      <FloatingTitle author={authorName} title={title} />
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", right: 0, width: 190 }}>
          <CategoryTeaser category={category} style={{ marginBottom: 30 }} />
          <TagsTeaser tags={tags} />
          <TecnicalData tecnicalData={props.doc.data.tecnical_data} />
        </div>
      </div>
      <style jsx>{`
        .root {
          display: none;
        }
        @media only screen and (min-width: 752px) {
          .root {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebars;
