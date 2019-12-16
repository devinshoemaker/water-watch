import React from 'react';
import { render } from '@testing-library/react';
import AuthenticatedApp from './AuthenticatedApp';

describe('AuthenticatedApp', () => {
  it('should render without crashing', () => {
    render(<AuthenticatedApp />);
  });
});
