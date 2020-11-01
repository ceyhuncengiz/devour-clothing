import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApHF6Nnt3D_wh17XALMGYHv5OFCWr7jQ8",
    authDomain: "crwn-db-e6a43.firebaseapp.com",
    databaseURL: "https://crwn-db-e6a43.firebaseio.com",
    projectId: "crwn-db-e6a43",
    storageBucket: "crwn-db-e6a43.appspot.com",
    messagingSenderId: "470570969555",
    appId: "1:470570969555:web:045150826478185a916726",
    measurementId: "G-1LWT1D9H04"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); 

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;

} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;