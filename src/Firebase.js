import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)

// Google authentication
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const signinwithGoogle = async () => {
  const result = await signInWithPopup(auth, provider)

  await createUserDocumentFromAuth(result.user)

  return result
}

// Create user document in Firestore
export async function createUserDocumentFromAuth(
  userAuth,
  displayName = userAuth.displayName || ''
) {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    await setDoc(userDocRef, {
      displayName: displayName,
      email: userAuth.email,
      createdAt: serverTimestamp(),
    })
  }

  return userDocRef
}

// Create account with email and password
export const createAuthUserWithEmailAndPassword = async ( email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth,email,password )
}

// Sign up and save full name in Firebase and Firestore
export const signUpWithEmailAndPassword = async (fullName,email,password) => {
  const result = await createAuthUserWithEmailAndPassword( email, password )

  if (!result) return

  await updateProfile(result.user, {
    displayName: fullName,
  })

  await createUserDocumentFromAuth(result.user, fullName)

  return result
}

// Login with email and password
export const signinAuthUserWithEmailAndPassword = async (email,password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth,email,password)
}