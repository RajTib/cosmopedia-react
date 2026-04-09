import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (u) => {
            setUser(u);
        });

        return () => unsub();
    }, []);

    const logout = () => signOut(auth);

    return { user, logout };
}
