export const Login = () => ({
	type: "LOGIN_STRART",
});

export const LoginSuccess = (user) => ({
	type: "LOGIN_SUCCESS",
	payload: user,
});

export const LoginFailure = (error) => ({
	type: "LOGIN_FAILURE",
	payload: error,
});
