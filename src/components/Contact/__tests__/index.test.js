import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "../../Contact";

afterEach(cleanup);

describe("Contact component", () => {
  // baseline
  it("should render", () => {
    render(<Contact />);
  });

  it("should match", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it("should render h1", () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId("h1tag")).toHaveTextContent("Contact Me");
});

it("should render", () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId("button")).toHaveTextContent("Submit");
});
