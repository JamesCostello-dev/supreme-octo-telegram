import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories =[
{ name: 'Portraits', describe: 'Portraits of people in my life' }
]

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  // baseline
  it('should render', () => {
render(<Nav 
  categories={categories}
  setCurrentCategory={mockSetCurrentCategory}
  currentCategory={mockCurrentCategory}
/>);
  })
  // snapshot
  it('should match the snapshot', () => {
  const { asFragment } = render(<Nav 
    categories={categories}
    setCurrentCategory={mockSetCurrentCategory}
    currentCategory={mockCurrentCategory}
  />);
    // value comparison
    expect(asFragment()).toMatchSnapshot();
  });
})


describe('emoji is visible', () => {
  it('should insert a emoji into the h2', () => {
    // arrange
    const { getByLabelText } = render(<Nav 
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);
    // assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  })
})


describe('links are visible', () => {
  it('should insert a link', () => {
    // arrange
      const { getByTestId } = render(<Nav 
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />);
    // assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
})
