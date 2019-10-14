import React from 'react';
import { Route } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { render } from '@testing-library/react';

import RedirectRoute from './redirect-route';

const AuthenticatedComponent: React.FunctionComponent = () => {
  return <span>authenticated</span>;
};

const UnauthenticatedComponent: React.FunctionComponent = () => {
  return <span>unauthenticated</span>;
};

describe('RedirectRoute', () => {
  it('renders component when condition is false', () => {
    const { getByText, unmount } = render(
      <IonReactRouter>
        <RedirectRoute
          path="/"
          component={AuthenticatedComponent}
          exact={true}
          redirectCondition={false}
          redirectPath="/unauthenticated"
        />
        <Route path="/unauthenticated" component={UnauthenticatedComponent} exact={true} />
      </IonReactRouter>
    );

    getByText('authenticated');
    unmount();
  });

  it('redirects when condition is true', () => {
    const { getByText, unmount } = render(
      <IonReactRouter>
        <RedirectRoute
          path="/"
          component={AuthenticatedComponent}
          exact={true}
          redirectCondition={true}
          redirectPath="/unauthenticated"
        />
        <Route path="/unauthenticated" component={UnauthenticatedComponent} exact={true} />
      </IonReactRouter>
    );

    getByText('unauthenticated');
    unmount();
  });
});
