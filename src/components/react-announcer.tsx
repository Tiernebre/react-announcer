import { CSSProperties } from "react";
import { Politeness } from "../types";

type ReactAnnouncerProperties = {
  text?: string;
  politeness?: Politeness;
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
  politeness,
}: ReactAnnouncerProperties): JSX.Element => {
  return (
    <div aria-live={politeness} style={style}>
      {text}
    </div>
  );
};
