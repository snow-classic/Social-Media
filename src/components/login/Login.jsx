
import "./login.css"

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Snow Book</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Snow book
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" type="text" className="loginInput"/>
                        <input placeholder="Password" type="text" className="loginInput"/>
                        <button className="loginButton">Log In</button>
                        <span className="loginForget">Forgot Password ?</span>
                        <button className="loginRegister">Create a new Account</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login;