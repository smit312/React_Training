import React from "react";
import Counter from "../Counter";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header render with correct text", () => {
  render(<Counter />);
  const headerel = screen.getByTestId("header");
  expect(headerel.textContent).toBe("My Counter");
});

test("counter is initially start with text 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterel = getByTestId("counter");
  expect(counterel.textContent).toBe("0");
});

test("input contains initial value of 1 ", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");
  expect(inputEl.value).toBe("1");
});

test("add button render with + sign", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId("add-btn");
  expect(addBtn.textContent).toBe("+");
});

test("substract button render with - sign", () => {
  const { getByTestId } = render(<Counter />);
  const subBtn = getByTestId("sub-btn");
  expect(subBtn.textContent).toBe("-");
});
