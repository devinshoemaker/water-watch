import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Settings from '../../pages/Settings/Settings';
import Menu from '../Menu/Menu';
import AddDrink from '../../pages/AddDrink/AddDrink';

export const AuthenticatedApp: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/home" component={Home} exact={true} />
            <Route path="/add-drink" component={AddDrink} exact={true} />
            <Route path="/settings" component={Settings} exact={true} />
            <Route exact path="/" component={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default AuthenticatedApp;
