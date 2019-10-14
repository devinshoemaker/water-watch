import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth } from '../../../firebase';

export const Login: React.FunctionComponent = () => {
  const uiConfig = {
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </>
  );
};

export default Login;
