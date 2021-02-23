import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const currentPhoto = {
  name: "Park Bench",
  category: "landscape",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

afterEach(cleanup);

const mockToggleModal = jest.fn();

describe("Modal component", () => {
  it("should render", () => {
    render(<img />);
  });
  it("should render", () => {
    const { asFragment } = render(<img />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Click Event", () => {
  it("should call onClick", () => {
    const { getByText } = render(
      <Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
    );
    fireEvent.click(getByText("Close this modal"));
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
