import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import RedirectRoute from './RedirectRoute';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const AuthenticatedComponent: React.FunctionComponent = () => {
  return <span>authenticated</span>;
};

const UnauthenticatedComponent: React.FunctionComponent = () => {
  return <span>unauthenticated</span>;
};

describe('RedirectRoute', () => {
  afterEach(cleanup);

  it('routes to authorized component when authorized', () => {
    const { getByText } = render(
      <AuthContext.Provider value={true}>
        <MemoryRouter initialEntries={['/authenticated']}>
          <RedirectRoute
            path="/authenticated"
            component={AuthenticatedComponent}
            exact={true}
            authorized={true}
            redirectPath="/unauthenticated"
          />
          <Route path="/unauthenticated" component={UnauthenticatedComponent} exact={true} />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    getByText('authenticated');
  });

  it('redirects to unauthorized component when unauthorized', () => {
    const { getByText } = render(
      <AuthContext.Provider value={false}>
        <MemoryRouter initialEntries={['/authenticated']}>
          <RedirectRoute
            path="/authenticated"
            component={AuthenticatedComponent}
            exact={true}
            authorized={true}
            redirectPath="/unauthenticated"
          />
          <Route path="/unauthenticated" component={UnauthenticatedComponent} exact={true} />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    getByText('unauthenticated');
  });

  it('routes to unauthorized component when unauthorized', () => {
    const { getByText } = render(
      <AuthContext.Provider value={false}>
        <MemoryRouter initialEntries={['/unauthenticated']}>
          <RedirectRoute
            path="/unauthenticated"
            component={UnauthenticatedComponent}
            exact={true}
            authorized={false}
            redirectPath="/authenticated"
          />
          <Route path="/authenticated" component={AuthenticatedComponent} exact={true} />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    getByText('unauthenticated');
  });

  it('redirects to authorized component when authorized', () => {
    const { getByText } = render(
      <AuthContext.Provider value={true}>
        <MemoryRouter initialEntries={['/unauthenticated']}>
          <RedirectRoute
            path="/unauthenticated"
            component={UnauthenticatedComponent}
            exact={true}
            authorized={false}
            redirectPath="/authenticated"
          />
          <Route path="/authenticated" component={AuthenticatedComponent} exact={true} />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    getByText('authenticated');
  });
});
