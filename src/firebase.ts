import firebase from 'firebase/app';
import 'firebase/auth';

import { environment } from './environments/environment';

firebase.initializeApp(environment.firebase);
export const auth = firebase.auth();

export default firebase;
