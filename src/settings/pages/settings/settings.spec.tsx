import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Settings from './settings';

describe('Settings', () => {
  afterEach(cleanup);

  it('should render without crashing', () => {
    render(<Settings />);
  });

  it('should have title', () => {
    const { getByText } = render(<Settings />);
    getByText('Settings');
  });

  it('should have log out button', () => {
    const { getByText } = render(<Settings />);
    fireEvent.click(getByText('Log out'));
  });
});
