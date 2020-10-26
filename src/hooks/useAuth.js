import { useEffect, useState } from 'react';

export const useAuth = (authFirebase) => {
    const [autentification, setAutentification] = useState(null);

    const auth = authFirebase();
    const provider = new authFirebase.GoogleAuthProvider();

    const logIn = () => auth.signInWithPopup(provider);
    const logOut = () => auth.signOut();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setAutentification(user);
            } else {
                setAutentification(null);
            }
        })
    }, [autentification, auth]);

    return {autentification, logIn, logOut}
}