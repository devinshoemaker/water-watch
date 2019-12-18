import { firestore } from '../../firebaseApp';

export function createDrink(userId: string, volume: number) {
  if (volume !== null) {
    firestore
      .collection('drinks')
      .add({
        volume: volume,
        timestamp: new Date(),
        userId: userId
      })
      .catch(function(error) {
        throw new Error('Error writing document: ' + error);
      });
  }
}
