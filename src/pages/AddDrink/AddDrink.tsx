import { IonBackButton, IonButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AddDrinkForm from '../../components/AddDrinkForm/AddDrinkForm';

const AddDrink: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Add Drink</IonTitle>
          <IonButtons slot="end">
            <IonButton>Save</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <AddDrinkForm />
    </IonPage>
  );
};

export default AddDrink;
