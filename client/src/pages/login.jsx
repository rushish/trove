import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp((prev) => !prev);
    };

    return (
        <div className={`container ${isSignUp ? 'sign-up' : ''}`}>
            <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
                <form>
                    <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
                    <span>{isSignUp ? 'or use your email for registration' : 'or use your email and password'}</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    {isSignUp ? <button>Sign Up</button> : <button>Sign In</button>}
                </form>
            </div>
            <div className="toggle-container">
                <div className={`toggle ${isSignUp ? 'sign-up-panel-active' : ''}`}>
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all site features</p>
                        <button className="hidden" onClick={() => setIsSignUp(false)}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all site features</p>
                        <button className="hidden" onClick={() => setIsSignUp(true)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
