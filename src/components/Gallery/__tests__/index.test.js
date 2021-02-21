import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'

const portrait = { name: 'portraits', description: 'Portraits of people in my life' };

afterEach(cleanup)

describe('Gallery is rendering', () => {

it('should render', () => {

render(<Gallery currentCategory={portrait} />);
});
});
