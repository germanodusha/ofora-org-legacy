import React from "react";
import P from "./base/Paragraph";

const TecnicalData = ({ tecnicalData }) => {
  console.log(tecnicalData);
  return (
    <div className="root">
      {tecnicalData.length && tecnicalData[0].text ? (
        <p className="title">Ficha técnica</p>
      ) : null}
      {tecnicalData.length ? (
        <P style={{ padding: 0, margin: 0, fontSize: 13 }}>{tecnicalData}</P>
      ) : null}
      <style jsx>{`
        .root {
          text-align: right;
          font-family: IntervalBook, monospace;
          font-size: 13px;
          line-height: 1.3em;
        }
      `}</style>
    </div>
  );
};

export default TecnicalData;
