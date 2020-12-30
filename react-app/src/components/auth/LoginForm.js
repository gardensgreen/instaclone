import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import Particles from "react-particles-js";

import "./LoginForm.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = async (e) => {
        e.preventDefault();
        const user = await login(email, password);
        if (!user.errors) {
            setAuthenticated(true);
        } else {
            setErrors(user.errors);
        }
    };

    const loginDemo = async (e) => {
        e.preventDefault();
        const user = await login("demo@demo.com", "password");
        if (!user.errors) {
            setAuthenticated(true);
        } else {
            setErrors(user.errors);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (authenticated) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <div className="login-form__container">
                <i className="fab fa-instagram fa-2x"></i>
                <h1 className="form-title">Log In</h1>
                <form className="login-form" onSubmit={onLogin}>
                    <div>
                        {errors.map((error) => (
                            <div>{error}</div>
                        ))}
                    </div>
                    <div className="input__container">
                        <input
                            className="input"
                            name="email"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={updateEmail}
                        />
                    </div>
                    <div className="input__container">
                        <input
                            className="input"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={updatePassword}
                        />
                        <button className="log-in-button" type="submit">
                            Log In
                        </button>
                    </div>
                </form>
                <div className="divider__container">
                    <div className="divider">
                        <strong className="divider-title">OR</strong>
                    </div>
                </div>
                <div className="demo-login__container">
                    <button onClick={loginDemo} className="demo-button">
                        Log In as Demo User
                    </button>
                </div>
            </div>
            <div className="sign-up__container">
                <p className="sign-up-text">
                    Don't have an account?{" "}
                    <NavLink className="sign-up-link" to="/sign-up">
                        Sign up
                    </NavLink>
                </p>
            </div>
            <Particles
                className="particles"
                params={{
                    particles: {
                        color: {
                            value: "#0095f6",
                        },
                        number: {
                            value: 50,
                        },
                        size: {
                            value: 4,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                    },
                }}
            />
        </>
    );
};

export default LoginForm;
