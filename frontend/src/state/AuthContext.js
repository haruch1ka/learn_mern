import { createContext } from "react";

export const initialState = {
	user: null,
	isFetching: false,
	error: false,
};

export const AuthContext = createContext(initialState);
