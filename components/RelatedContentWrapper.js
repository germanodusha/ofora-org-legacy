import React from "react";
import ImageGrid from "./ImageGrid";
import ContentWrapper from "./struct/ContentWrapper";

export const RelatedContentWrapper = ({ related }) =>
  related.length > 0 && (
    <ContentWrapper style={{ background: "#cfcfcf" }}>
      <span className="title">/Publicações relacionadas</span>
      <ImageGrid items={related} />
      <style jsx>{`
        .title {
          font-family: IntervalBook, monospace;
          font-size: 16px;
        }
        @media only screen and (min-width: 752px) {
          .title {
            margin-left: 60px;
          }
        }
      `}</style>
    </ContentWrapper>
  );

export default RelatedContentWrapper;
