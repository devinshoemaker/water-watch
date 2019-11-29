import firebase from 'firebase/app';
import 'firebase/auth';

import { environment } from './environments/environment';

const firebaseApp: firebase.app.App = firebase.initializeApp(environment.firebase);
export const auth = firebaseApp.auth();

export default firebaseApp;
