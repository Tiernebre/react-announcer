import { render, screen } from "@testing-library/react";
import { ReactAnnouncer } from ".";

describe("React Announcer", () => {
  it("displays the text content", () => {
    const text = "Hello there. This is a test.";
    render(<ReactAnnouncer text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
