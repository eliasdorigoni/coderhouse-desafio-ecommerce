import { useState } from 'react'
import { Provider } from './AuthContext'
import firebase from "firebase/app";
import "firebase/auth";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

    const signIn = function() {
        const authProvider = new firebase.auth.GoogleAuthProvider()

        firebase.auth()
            .signInWithPopup(authProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                // let credential = result.credential;

                setUser({
                    email: result.user.email,
                    name: result.user.displayName,
                    photoURL: result.user.photoURL,
                    uid: result.user.uid,
                })

            }).catch((error) => {
                /*
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                // The email of the user's account used.
                let email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                let credential = error.credential;

                console.log(errorCode)
                console.log(errorMessage)
                console.log(email)
                console.log(credential)
                */
        });
    }

    const signOut = function() {
        firebase.auth()
            .signOut()
            .finally(() => {setUser()})
    }

    const hasUser = function() {
        return user != null
    }

    const providerValues = {
        signIn: signIn,
        signOut: signOut,
        user: user,
        hasUser: hasUser,
    }

    return (
        <Provider value={providerValues}>
            {children}
        </Provider>
    )
}

export default AuthProvider