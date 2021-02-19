import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import About from "..";

afterEach(cleanup);

describe('about component', () => {
  // first test component
  it('should render', () => {
    render(<About />);
  });
  // second test component
  it('should match snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  })
})