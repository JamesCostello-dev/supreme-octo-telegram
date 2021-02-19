import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  // baseline
  it('should render', () => {
    render(<Nav />);
  })
  // snapshot
  it('should match the snapshot', () => {
    const { asFragment } = render(<Nav />);
    // value comparison
    expect(asFragment()).toMatchSnapshot();
  });
})


describe('emoji is visible', () => {
  it('should insert a emoji into the h2', () => {
    // arrange
    const { getByLabelText } = render(<Nav />);
    // assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  })
})


describe('links are visible', () => {
  it('should insert a link', () => {
    // arrange
    const { getByTestId } = render(<Nav />);
    // assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
})