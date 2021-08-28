import firebase from 'firebase/app'
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
})

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}

export function getDocumentIdField() {
    return firebase.firestore.FieldPath.documentId()
}

export function getTimestamp() {
    return firebase.firestore.Timestamp.fromDate(new Date())
}