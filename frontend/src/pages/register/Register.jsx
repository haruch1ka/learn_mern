import "./Register.css";
const Register = () => {
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Real SNS</h3>
					<span className="loginDesc">本格的なSNSを自分の手で</span>
				</div>
				<div className="loginRight">
					<div className="loginBox">
						<p className="loginMsg">新規登録はこちら</p>
						<input type="text" className="loginInput" placeholder="E-メール" />
						<input type="text" className="loginInput" placeholder="パスワード" />
						<button className="loginButton">ログイン</button>
						<span className="loginForgot">パスワードを忘れた方へ</span>
						<button className="loginRegisterButton">アカウント作成</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
