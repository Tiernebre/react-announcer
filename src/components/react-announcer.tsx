/* eslint-disable unicorn/no-null */
import { CSSProperties } from "react";
import { Politeness } from "../types";
import { useAnnouncerStore } from "../hooks";

type ReactAnnouncerProperties = {
  politeness?: Politeness;
  testId?: string;
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
  testId = "react-announcer",
}: ReactAnnouncerProperties): JSX.Element | null => {
  const { message } = useAnnouncerStore();

  return message ? (
    <div aria-live={politeness} style={style} data-testid={testId}>
      {message}
    </div>
  ) : null;
};
