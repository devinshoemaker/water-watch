import React from 'react';
import { Redirect } from 'react-router';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Menu from './components/Menu/Menu';
import RedirectRoute from './components/RedirectRoute/RedirectRoute';
import AuthProvider from './providers/AuthProvider/AuthProvider';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <RedirectRoute path="/home" component={Home} exact={true} authorized={true} redirectPath="/login" />
              <RedirectRoute path="/login" component={Login} exact={true} authorized={false} redirectPath="/home" />
              <RedirectRoute
                path="/settings"
                component={Settings}
                exact={true}
                authorized={true}
                redirectPath="/login"
              />
              <RedirectRoute
                path="/"
                component={() => <Redirect to="/home" />}
                exact={true}
                authorized={true}
                redirectPath="/login"
              />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </AuthProvider>
  );
};

export default App;
