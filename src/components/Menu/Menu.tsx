import React, { useContext } from 'react';
import {
  IonMenu,
  IonContent,
  IonList,
  IonMenuToggle,
  IonIcon,
  IonLabel,
  IonItem,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react';
import { home, settings } from 'ionicons/icons';

import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const appPages = [
  { title: 'Home', path: '/home', icon: home },
  { title: 'Settings', path: '/settings', icon: settings }
];

export const Menu: React.FC = () => {
  const authenticated: boolean = useContext(AuthContext);
  return (
    <IonMenu type="overlay" contentId="main" disabled={!authenticated}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {appPages.map(page => (
            <IonMenuToggle key={page.title} autoHide={false}>
              <IonItem routerLink={page.path} routerDirection="none">
                <IonIcon slot="start" icon={page.icon} />
                <IonLabel>{page.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
