import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase-config';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile
} from 'firebase/auth';

//Creating Context
export const AuthContext = React.createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const Auth = ({ children }) => {
	const [ loading, setLoading ] = useState(true);
	const [ currentUser, setCurrentUser ] = useState();

	//SignUp Function
	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	// Login function
	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	//Log Out Function
	function signout() {
		return signOut(auth);
	}

	function updateprofile(name) {
		return updateProfile(auth.currentUser, {
			displayName: name
		});
	}

	useEffect(() => {
		// this allows to set user if it exist or set to null if doesn't
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		// Unsubscribe when unmount the listener after we are done
		return unsubscribe;
	}, []);

	const values = {
		currentUser,
		signup,
		login,
		signout,
		updateprofile
	};

	if (loading) {
		return <p>Loading...</p>;
	}
	return <AuthContext.Provider value={values}>{!loading && children}</AuthContext.Provider>;
};
