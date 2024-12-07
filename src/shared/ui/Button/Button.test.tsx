import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

describe("ButtonComponent", () => {
  test("render", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("clear", () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});
