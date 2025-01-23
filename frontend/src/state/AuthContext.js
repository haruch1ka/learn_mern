import { createContext } from "react";

export const initialState = {
	// user: null,
	user: {
		_id: "678daa7b178a0daf01723059",
		username: "anno",
		email: "anno@fakegmail.com",
		password: "fakepass",
		profilePicture: "/person/1.jpeg",
		followers: [],
		followings: [],
		isAdmin: false,
	},
	// user: {
	// 	_id: "6787b8baaa619391bbddb4f9",
	// 	username: "田中更新",
	// 	email: "hogehoge@fakegmail.com",
	// 	password: "fakepass",
	// 	profilePicture: "/person/1.jpeg",
	// 	followers: [],
	// 	followings: [],
	// 	isAdmin: false,
	// },
	isFetching: false,
	error: false,
};

export const AuthContext = createContext(initialState);
