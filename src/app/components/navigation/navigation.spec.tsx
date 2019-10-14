import React from 'react';
import { render } from '@testing-library/react';

import Navigation from './navigation';

describe('Navigation', () => {
  it('should render authenticated without crashing', () => {
    const { unmount } = render(<Navigation authenticated={true} />);
    unmount();
  });
});
