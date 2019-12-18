import React from 'react';
import { render, cleanup } from '@testing-library/react';

import AddDrink from './AddDrink';

describe('Settings', () => {
  afterEach(cleanup);

  it('should render without crashing', () => {
    render(<AddDrink />);
  });

  it('should have title', () => {
    const { getByText } = render(<AddDrink />);
    getByText('Add Water');
  });
});
