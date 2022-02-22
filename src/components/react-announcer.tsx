import { CSSProperties } from "react";

type ReactAnnouncerProperties = {
  text?: string;
};

const style: CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
};

export const ReactAnnouncer = ({
  text,
}: ReactAnnouncerProperties): JSX.Element => {
  return <div style={style}>{text}</div>;
};
