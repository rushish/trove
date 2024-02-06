import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);

    const handleToggle = () => {
        setIsSignup((prev) => !prev);
    };

    return (
        <div className={`container ${isSignup ? 'active' : ''}`}>
            <div className={`form-container ${isSignup ? 'sign-up' : 'sign-in'}`}>
                <form>
                    <h1>{isSignup ? 'Create Account' : 'Sign In'}</h1>
                    <span>{isSignup ? 'or use your email for registration' : 'or use your email and password'}</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    {isSignup ? <button>Sign Up</button> : <button>Sign In</button>}
                </form>
            </div>
            <div className="toggle-container">
                <div className={`toggle ${isSignup ? 'sign-up-panel-active' : ''}`}>
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all site features</p>
                        <button className="hidden" onClick={() => setIsSignup(false)}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all site features</p>
                        <button className="hidden" onClick={() => setIsSignup(true)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
