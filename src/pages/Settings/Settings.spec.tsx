import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Settings from './Settings';

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
    const { getByText, getByLabelText } = render(<Settings />);
    getByText('Log out');
  });
});
