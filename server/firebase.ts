import { initializeApp as init, getApps, getApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// init firebase (workaround for ssr)
const client_app = !getApps().length ? init(firebaseConfig) : getApp();

const client_auth = getAuth(client_app);

export async function createUser(email: string, password: string) {
  const userCredentials = await createUserWithEmailAndPassword(
    client_auth,
    email,
    password
  );
  const user = userCredentials.user;
  return user;
}

export async function loginUser(email: string, password: string) {
  const userCredentials = await signInWithEmailAndPassword(client_auth, email, password);
  const user = userCredentials.user;
  return user;
}

export async function signOut() {
  await client_auth.signOut();
}

export const user = client_auth.currentUser;

// server side ??
import admin from "firebase-admin";

let serviceAccountStr = process.env.FIREBASE_ADMIN_KEY as string;
let serviceAccount = JSON.parse(serviceAccountStr);

const app = !admin.apps.length ? admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
}) : admin.app();

const auth = app.auth();

export async function createServerUser(email: string, password: string) {
  const userRecord = await auth.createUser({
    email,
    password,
  });
  const user = userRecord.toJSON();
  return user;
}

export async function checkAccessToken(token: string) {
  const decodedToken = await auth.verifyIdToken(token);
  return decodedToken;
}
