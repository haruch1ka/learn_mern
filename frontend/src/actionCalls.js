import axios from "axios";
import { Login, LoginSuccess, LoginFailure } from "./state/AuthAction";

export const loginCall = async (user, dispatch) => {
	dispatch(Login());
	try {
		const res = await axios.post("/api/auth/login", user);
		dispatch(LoginSuccess(res.data));
	} catch (err) {
		dispatch(LoginFailure(err));
	}
};
