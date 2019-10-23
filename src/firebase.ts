import firebase from 'firebase/app';
import 'firebase/auth';

import { environment } from './environments/environment';

firebase.initializeApp(environment.firebase);
export const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.NONE);

export default firebase;
