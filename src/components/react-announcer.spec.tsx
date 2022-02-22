import { act, render, screen } from "@testing-library/react";
import { ReactAnnouncer } from ".";
import { Politeness } from "../types";
import { announce } from "../api";

describe("React Announcer", () => {
  it("by default has a polite aria-live if not specified", () => {
    render(<ReactAnnouncer />);
    act(() => {
      announce("Hello there. This is a test.");
    });
    expect(screen.getByText(/hello/i)).toHaveAttribute("aria-live", "polite");
  });

  it.each<Politeness>(["polite", "off", "assertive"])(
    "can be set with politeness = %p",
    (politeness: Politeness) => {
      render(<ReactAnnouncer politeness={politeness} />);
      act(() => {
        announce("Hello there. This is a test.");
      });
      expect(screen.getByText(/hello/i)).toHaveAttribute(
        "aria-live",
        politeness
      );
    }
  );
});
