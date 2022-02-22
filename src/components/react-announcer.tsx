import { CSSProperties } from "react";
import { Politeness } from "../types";
import { useAnnouncerStore } from "../hooks";

type ReactAnnouncerProperties = {
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
  politeness = "polite",
}: ReactAnnouncerProperties): JSX.Element => {
  const { message } = useAnnouncerStore();

  return (
    <div aria-live={politeness} style={style}>
      {message}
    </div>
  );
};
