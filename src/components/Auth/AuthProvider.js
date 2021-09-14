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
            .then(result => {
                setUser({
                    email: result.user.email,
                    name: result.user.displayName,
                    photoURL: result.user.photoURL,
                    uid: result.user.uid,
                })
                loadOrders()
            })
            .catch((error) => {
                console.log('Error en signIn', error, '---')
                alert('No se pudo iniciar sesión. Por favor intente nuevamente.')
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

    const loadOrders = function() {
        console.log('loadOrders')
        /*
        getFirestore()
            .collection('orders')
            .where('userid', '==', context.user.uid)
            .get()
            .then(querySnapshot => {
                setOrders(querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                }))
            })
            .catch(error => {
                console.log('Error al buscar ordenes')
                console.log(error)
                console.log('---')
            })
        */
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