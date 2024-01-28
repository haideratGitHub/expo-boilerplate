import { Props } from "@helpers/types";
import React, { createContext, useContext } from "react";

type IContextProps = {
	signUp: () => void;
	signIn: () => void;
	logOut: () => void;
};

const AuthContext = createContext({} as IContextProps);

export const AuthProvider = ({ children }: Props) => {
	const signUp = async () => {};
	const signIn = async () => {};
	const logOut = async () => {};

	return (
		<AuthContext.Provider value={{ signUp, signIn, logOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
