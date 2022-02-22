import { act, render, screen } from "@testing-library/react";
import { ReactAnnouncer } from ".";
import { Politeness } from "../types";
import { announce } from "../api";

const testId = "react-announcer";
const testMessage = "Hello there. This is a test.";

const queryAnnouncer = (): HTMLElement | null => screen.queryByTestId(testId);
const getAnnouncer = (): HTMLElement => screen.getByTestId(testId);

const announceATestMessage = (message = testMessage) => {
  act(() => {
    announce(message);
  });
};

describe("React Announcer", () => {
  it("is not rendered without a message", () => {
    render(<ReactAnnouncer />);
    expect(queryAnnouncer()).toBeNull();
  });

  it("is rendered when a message is announced", () => {
    render(<ReactAnnouncer />);
    announceATestMessage();
    const announcer = getAnnouncer();
    expect(announcer).toBeInTheDocument();
    expect(announcer).toHaveTextContent(testMessage);
  });

  it("can handle message updates", () => {
    render(<ReactAnnouncer />);
    announceATestMessage();
    expect(getAnnouncer()).toHaveTextContent(testMessage);
    const updatedMessage = "This is an update. Hi!";
    announceATestMessage(updatedMessage);
    expect(getAnnouncer()).toHaveTextContent(updatedMessage);
  });

  it("by default has a polite aria-live if not specified", () => {
    render(<ReactAnnouncer />);
    announceATestMessage();
    expect(getAnnouncer()).toHaveAttribute("aria-live", "polite");
  });

  it.each<Politeness>(["polite", "off", "assertive"])(
    "can be set with politeness = %p",
    (politeness: Politeness) => {
      render(<ReactAnnouncer politeness={politeness} />);
      announceATestMessage();
      expect(getAnnouncer()).toHaveAttribute("aria-live", politeness);
    }
  );
});
