import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../../pages/Login/Login';

export const CapacitorRoutes: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={() => <Redirect to="/login" />} />
    </IonRouterOutlet>
  );
};

export const WebRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  );
};

export interface UnauthenticatedAppProps {
  isCapacitor: boolean;
}

export const UnauthenticatedApp: React.FC<UnauthenticatedAppProps> = (
  props: UnauthenticatedAppProps
) => {
  return (
    <IonApp>
      <IonReactRouter>
        {props.isCapacitor ? <CapacitorRoutes /> : <WebRoutes />}
      </IonReactRouter>
    </IonApp>
  );
};

export default UnauthenticatedApp;
