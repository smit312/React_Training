import React from "react";
import Counter from "../Counter";
import { render, screen, fireEvent } from "@testing-library/react";
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

test("change value of input works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");
  expect(inputEl.value).toBe("1");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  expect(inputEl.value).toBe("5");
});

test("click on plus btn adds 1 to counter", () => {
  const { getByTestId } = render(<Counter />);
  const addbtnel = getByTestId("add-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(addbtnel);

  expect(counterEl.textContent).toBe("1");
});

test("click on subtract btn subtracts 1 from counter", () => {
  const { getByTestId } = render(<Counter />);
  const subbtnel = getByTestId("sub-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(subbtnel);

  expect(counterEl.textContent).toBe("-1");
});

test("changing input value then clicking on add button works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const addbtnel = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addbtnel);

  expect(counterEl.textContent).toBe("5");
});

test("changing input value then clicking on subtract button works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const subtractbtnel = getByTestId("sub-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(subtractbtnel);

  expect(counterEl.textContent).toBe("-5");
});

test("adding and then subtracting leads to correct counter number", () => {
  const { getByTestId } = render(<Counter />);
  const subtractbtnel = getByTestId("sub-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  const addBtnEl = getByTestId("add-btn");
  fireEvent.change(inputEl, {
    target: {
      value: "10",
    },
  });
  fireEvent.click(addBtnEl); //+10
  fireEvent.click(addBtnEl); //10+10=20
  fireEvent.click(addBtnEl); //20+10=30
  fireEvent.click(addBtnEl); //30+10=40
  fireEvent.click(addBtnEl); //40+10=50
  fireEvent.click(subtractbtnel); //50-10=40
  fireEvent.click(subtractbtnel); //40-10=30
  fireEvent.click(subtractbtnel); //30-10=20
  //so answer should be 20
  expect(counterEl.textContent).toBe("20");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtnEl); //20+5=25
  fireEvent.click(subtractbtnel); //25-5=20
  fireEvent.click(subtractbtnel); //20-5==15
  //so answer sholuld be 15
  expect(counterEl.textContent).toBe("15");
});

test("counter contains correct className", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  const addBtnEl = getByTestId("add-btn");
  const subtractbtnel = getByTestId("sub-btn");

  expect(counterEl.className).toBe("");

  fireEvent.change(inputEl, {
    target: {
      value: "50",
    },
  });

  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe("");

  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe("green");

  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe("green");

  fireEvent.click(subtractbtnel);
  fireEvent.click(subtractbtnel);
  expect(counterEl.className).toBe("");

  fireEvent.click(subtractbtnel);
  fireEvent.click(subtractbtnel);
  fireEvent.click(subtractbtnel);
  fireEvent.click(subtractbtnel);

  expect(counterEl.className).toBe("red");
});
