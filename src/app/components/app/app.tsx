import React from 'react';
import { Route, Redirect } from 'react-router';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import RedirectRoute from '../redirect-route/redirect-route';
import { AuthProvider } from '../../contexts';
import { Home } from '../../../home/pages';
import { Login } from '../../../auth/pages';
import { Settings } from '../../../settings/pages';

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
import '../../../theme/variables.css';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <RedirectRoute path="/home" component={Home} exact={true} authorized={true} redirectPath="/login" />
            <RedirectRoute path="/login" component={Login} exact={true} authorized={false} redirectPath="/home" />
            <RedirectRoute path="/settings" component={Settings} exact={true} authorized={true} redirectPath="/login" />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </AuthProvider>
  );
};

export default App;
