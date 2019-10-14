import React from 'react';
import { Route, Redirect } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { IonPage, IonRouterOutlet } from '@ionic/react';

import RedirectRoute from '../redirect-route/redirect-route';
import { Home } from '../../../home/containers';
import { Login } from '../../../auth/containers';

interface NavigationProps {
  authenticated: boolean;
}

export const Navigation = (props: NavigationProps) => {
  return (
    <IonReactRouter>
      <IonPage>
        <IonRouterOutlet>
          <RedirectRoute
            path="/home"
            component={Home}
            exact={true}
            redirectPath="/login"
            redirectCondition={!props.authenticated}
          />
          <RedirectRoute
            path="/login"
            component={Login}
            exact={true}
            redirectPath="/home"
            redirectCondition={props.authenticated}
          />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonPage>
    </IonReactRouter>
  );
};

export default Navigation;
