import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { firebaseConfig } from "./config.js";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Initialize
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Provider
const provider = new GoogleAuthProvider();

// Google Login
export function googleLogin() {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Google user: ", result.user);
        })
        .catch((error) => {
            console.error(error);
        })
}
console.log("Firebase connected 🚀");

// Save favorites
export async function saveFavorites(userId, favorites) {
    await setDoc(doc(db, "users", userId), {
        favorites: favorites
    });
}

// Load favorites
export async function loadFavorites(userId) {
    const snap = await getDoc(doc(db, "users", userId));

    if (snap.exists()) {
        return snap.data().favorites || [];
    }
    return [];
}
