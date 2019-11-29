import React from 'react';
import { render } from '@testing-library/react';

import Menu from './Menu';

describe('Menu', () => {
  it('should render without crashing', () => {
    render(<Menu />);
  });

  it('should have title', () => {
    const { getByText } = render(<Menu />);
    getByText('Menu');
  });

  it('should list pages', () => {
    const { getByText, getByTestId } = render(<Menu />);
    getByText('Home');
    getByText('Settings');
  });
});
