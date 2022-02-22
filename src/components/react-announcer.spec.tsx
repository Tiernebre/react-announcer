import { render, screen } from "@testing-library/react";
import { ReactAnnouncer } from ".";
import { Politeness } from "../types";

describe("React Announcer", () => {
  it("displays the text content", () => {
    const text = "Hello there. This is a test.";
    render(<ReactAnnouncer text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it.each<Politeness>(["polite", "off", "assertive"])(
    "can be set with politeness = %p",
    (politeness: Politeness) => {
      const text = "Hello there. This is a test.";
      render(<ReactAnnouncer text={text} politeness={politeness} />);
      expect(screen.getByText(text)).toHaveAttribute("aria-live", politeness);
    }
  );
});
