import React from 'react';
import { render } from '@testing-library/react';
import Parent from './Parent';

test('renders learn react link', () => {
  const { getByText } = render(<Parent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
