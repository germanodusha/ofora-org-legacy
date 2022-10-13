import MediaQuery from "react-responsive";

export const MobileOnly = ({ children }) => (
  <MediaQuery query="(max-width: 752px)">{children}</MediaQuery>
);

export const DesktopOnly = ({ children, values }) => (
  <MediaQuery query="(min-width: 752px)">{children}</MediaQuery>
);
