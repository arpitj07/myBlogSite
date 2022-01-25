import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = React.createContext();

export const Auth = ({ children }) => {
	const [ loading, setLoading ] = useState(true);
	const [ currentUser, setCurrentUser ] = useState(null);
	useEffect(() => {
		onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
	}, []);
	if (loading) {
		return <p>Loading...</p>;
	}
	return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
