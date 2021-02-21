import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '../'

afterEach(cleanup)

describe('PhotoList is rendering', () => {
it('should render', () => {
render(<PhotoList />);
	});

	it('should render', () => {
	const { asFragment } = render(<PhotoList />)
		expect(asFragment()).toMatchSnapshot()
	});
})
