import { createContext } from "react";

export const initialState = {
	// user: null,
	user: {
		_id: "678daa7b178a0daf01723059",
		username: "anno",
		email: "anno@fakegmail.com",
		password: "fakepass",
		profilePicture: "",
		followers: [],
		followings: [],
		isAdmin: false,
	},
	isFetching: false,
	error: false,
};

export const AuthContext = createContext(initialState);
