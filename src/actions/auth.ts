import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid: string) => ({
    type: 'LOGIN',
    uid
});

// async
export const startLogin = () => {
    return () => {
        // takes provider as first arg
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = (): () => Promise<void> => {
    return () => {
        return firebase.auth().signOut();
    }
};