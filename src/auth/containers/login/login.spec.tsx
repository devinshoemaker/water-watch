import React from 'react';
import { render } from '@testing-library/react';

import Login from './login';

describe('Login', () => {
  it('should render without crashing', () => {
    render(<Login />);
  });
});
