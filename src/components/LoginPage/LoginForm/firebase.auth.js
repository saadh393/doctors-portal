import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyD-F2jvTI2AmbHEg_J-v0TZK9_6hq9us_o',
    authDomain: 'programming-hero-assignments.firebaseapp.com',
    projectId: 'programming-hero-assignments',
    storageBucket: 'programming-hero-assignments.appspot.com',
    messagingSenderId: '40142514243',
    appId: '1:40142514243:web:f911203306e0298fd94cf6',
};

firebase.initializeApp(firebaseConfig);

export const handleSignin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            const { credential } = result;
            return credential;
        })
        .catch((error) => {
            return error;
        });
};
