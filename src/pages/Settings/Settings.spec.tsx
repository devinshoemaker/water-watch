import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Settings from './Settings';

describe('Settings', () => {
  afterEach(cleanup);

  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <Settings />
      </MemoryRouter>
    );
  });

  it('should have title', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Settings />
      </MemoryRouter>
    );
    getByText('Settings');
  });

  it('should have log out button', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Settings />
      </MemoryRouter>
    );
    getByText('Log out');
  });
});
