import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Settings from '../../pages/Settings/Settings';
import Menu from '../Menu/Menu';

export const CapacitorRoutes: React.FC = () => {
  return (
    <IonRouterOutlet id="main">
      <Route exact path="/home" component={Home} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/" component={() => <Redirect to="/home" />} />
    </IonRouterOutlet>
  );
};

export const WebRoutes: React.FC = () => {
  return (
    <div id="main">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/" component={() => <Redirect to="/home" />} />
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </div>
  );
};

export interface AuthenticatedAppProps {
  isCapacitor: boolean;
}

export const AuthenticatedApp: React.FC<AuthenticatedAppProps> = (
  props: AuthenticatedAppProps
) => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          {props.isCapacitor ? <CapacitorRoutes /> : <WebRoutes />}
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default AuthenticatedApp;
