import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonToast
} from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../../firebaseApp';
import { createDrink } from '../../services/drink-service/drink-service';

const AddDrinkFrom: React.FC = () => {
  const [volume, setVolume] = useState<number | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const history = useHistory();

  function handleVolumeChange(event: any) {
    setVolume(event.target.value);
  }

  function handleSubmit(event: any) {
    if (auth.currentUser !== null && volume !== null) {
      try {
        createDrink(auth.currentUser.uid, volume);
        history.push('/home');
      } catch (error) {
        setShowToast(true);
      }
    }

    event.preventDefault();
  }

  return (
    <IonContent className="ion-padding">
      <form id="add-drink-form" onSubmit={handleSubmit}>
        <IonItem>
          <IonLabel position="floating">Number of fluid ounces</IonLabel>
          <IonInput
            type="number"
            value={volume !== null ? volume.toString() : ''}
            onIonChange={handleVolumeChange}
          ></IonInput>
        </IonItem>
      </form>

      <IonButton expand="block" onClick={handleSubmit}>
        Add drink
      </IonButton>

      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="An error has occurred, please try again"
        duration={2000}
      />
    </IonContent>
  );
};

export default AddDrinkFrom;
