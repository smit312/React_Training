import React from "react";
import Counter from "../Counter";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header render with correct text", () => {
  render(<Counter />);
  const header1 = screen.getByTestId("header");
  expect(header1.textContent).toBe("My Counter");
});
