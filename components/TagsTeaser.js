import React from "react";
import Link from "./base/Link";

const TagsTeaser = ({ tags }) => {
  if (!tags.length) return false;
  return (
    <div className="root">
      <p className="title">Hashtags</p>
      {tags.map((tag) => (
        <div>
          <Link href={{ pathname: "/acoes/tag", query: { tag } }}>
            <a>{tag}</a>
          </Link>
        </div>
      ))}
      <style jsx>{`
        a {
          text-decoration: underline;
        }
        a:hover {
          color: rgb(0, 17, 254);
        }
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

export default TagsTeaser;
