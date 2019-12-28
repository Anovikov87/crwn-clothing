import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBe0H3soTA9cTyqwxd3mZgDkIU8U2HupPM",
    authDomain: "crwn-db-aba70.firebaseapp.com",
    databaseURL: "https://crwn-db-aba70.firebaseio.com",
    projectId: "crwn-db-aba70",
    storageBucket: "crwn-db-aba70.appspot.com",
    messagingSenderId: "307165958884",
    appId: "1:307165958884:web:279bf8d1da8f8901e192f1",
    measurementId: "G-Z6YHTL6PVZ"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase