import "./Register.css";

import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const email = useRef();
	const password = useRef();
	const username = useRef();
	const passwordConfirmation = useRef();

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password.current.value !== passwordConfirmation.current.value) {
			password.current.setCustomValidity("パスワード違うやん");
		} else {
			try {
				const user = {
					username: username.current.value,
					email: email.current.value,
					password: password.current.value,
				};
				//regisetarApiを叩く
				await axios.post("/api/auth/register", user);
				navigate("/login");
				console.log(user);
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<>
			<div className="login">
				<div className="loginWrapper">
					<div className="loginLeft">
						<h3 className="loginLogo">Real SNS</h3>
						<span className="loginDesc">本格的なSNSを、自分の手で。</span>
					</div>
					<div className="loginRight">
						<form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
							<p className="loginMsg">新規登録はこちら</p>
							<input type="text" className="loginInput" placeholder="ユーザー名" required ref={username} />
							<input type="email" className="loginInput" placeholder="Eメール" required ref={email} />
							<input type="password" className="loginInput" placeholder="パスワード" required minLength="6" ref={password} />
							<input
								type="text"
								className="loginInput"
								placeholder="確認用パスワード"
								required
								minLength="6"
								ref={passwordConfirmation}
							/>
							<button className="loginButton" type="submit">
								サインアップ
							</button>
							<button className="loginRegisterButton">ログイン</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
