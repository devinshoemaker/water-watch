import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { home, settings } from 'ionicons/icons';
import React from 'react';

const appPages = [
  { title: 'Home', path: '/home', icon: home },
  { title: 'Settings', path: '/settings', icon: settings }
];

export const Menu: React.FC = () => {
  return (
    <IonMenu type="overlay" contentId="main">
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
