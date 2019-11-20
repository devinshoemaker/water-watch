import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonPage, IonContent } from '@ionic/react';
import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth } from '../../../firebase';

export const Login: React.FC = () => {
  const uiConfig = {
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </IonContent>
    </IonPage>
  );
};

export default Login;
