import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Login from '../../pages/Login/Login';

export const UnauthenticatedApp: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/login" component={Login} exact={true} />
          <Route exact path="/" component={() => <Redirect to="/login" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default UnauthenticatedApp;
