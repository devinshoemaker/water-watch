import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonMenuButton,
  IonAlert
} from '@ionic/react';

import { auth } from '../../firebaseApp';

export const Settings: React.FC = () => {
  const [showLogOutAlert, setShowLogOutAlert] = useState<boolean>(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button onClick={() => setShowLogOutAlert(true)}>
            <IonLabel>Log out</IonLabel>
            <IonAlert
              isOpen={showLogOutAlert}
              header={'Are you sure?'}
              buttons={[
                {
                  text: 'Confirm',
                  handler: () => {
                    auth.signOut();
                  }
                },
                {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => setShowLogOutAlert(false)
                }
              ]}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
