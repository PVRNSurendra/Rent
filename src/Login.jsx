import { useState } from 'react';
import './Login.css';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleSignInClick = () => {
        setIsSignUp(false);
    };

    return (
        <div className={`wrapper ${isSignUp ? 'animate-signUp' : 'animate-signIn'}`}>
            <div className={`form-wrapper sign-in ${isSignUp ? 'hidden' : ''}`}>
                <form>
                    <h2>Login</h2>
                    <div className="input-group">
                        <input type="text" required />
                        <label>Username</label>
                    </div>
                    <div className="input-group">
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div className="forgot-pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="sign-link">
                        <p>Don't have an account? <span onClick={handleSignUpClick} className="signUp-link">Sign Up</span></p>
                    </div>
                </form>
            </div>

            <div className={`form-wrapper sign-up ${isSignUp ? '' : 'hidden'}`}>
                <form>
                    <h2>Sign Up</h2>
                    <div className="input-group">
                        <input type="text" required />
                        <label>Username</label>
                    </div>
                    <div className="input-group">
                        <input type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="input-group">
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                    <div className="sign-link">
                        <p>Already have an account? <span onClick={handleSignInClick} className="signIn-link">Sign In</span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
