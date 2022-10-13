import React from "react";
import Link from "next/link";

export default class CustomLink extends React.Component {
  render() {
    const { style, href, onClick, children } = this.props;
    if (onClick) {
      return (
        <a onClick={onClick} style={{ ...linkStyle, ...style }}>
          {children}
        </a>
      );
    }
    if (!href) return null;
    return (
      <Link href={href}>
        <a
          style={{ ...linkStyle, ...style }}
          target={/^(f|ht)tps?:\/\//i.test(href.pathname) && "_blank"}
        >
          {children}
        </a>
      </Link>
    );
  }
}

const linkStyle = {
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
};
