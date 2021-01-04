import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signUp, login } from "../../services/auth";
import { NavLink } from "react-router-dom";
import Particles from "react-particles-js";

import "./LoginForm.css";
const SignUpForm = ({ authenticated, setAuthenticated }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const user = await signUp(username, email, password);
            if (!user.errors) {
                setAuthenticated(true);
            }
        }
    };

    const loginDemo = async (e) => {
        e.preventDefault();
        const user = await login("demo@aa.io", "password");
        if (!user.errors) {
            setAuthenticated(true);
        }
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (authenticated) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <div className="login-form__container">
                <i className="fab fa-instagram fa-2x"></i>
                <h1 className="form-title">Sign up</h1>
                <form className="login-form" onSubmit={onSignUp}>
                    <div className="input__container">
                        <input
                            className="input"
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={updateUsername}
                            value={username}
                        ></input>
                    </div>
                    <div className="input__container">
                        <input
                            className="input"
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={updateEmail}
                            value={email}
                        ></input>
                    </div>
                    <div className="input__container">
                        <input
                            className="input"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={updatePassword}
                            value={password}
                        ></input>
                    </div>
                    <div className="input__container">
                        <input
                            type="password"
                            name="repeat_password"
                            className="input"
                            placeholder="Confirm Password"
                            onChange={updateRepeatPassword}
                            value={repeatPassword}
                            required={true}
                        ></input>
                    </div>
                    <button className="log-in-button" type="submit">
                        Sign Up
                    </button>
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
                    Already have an account?{" "}
                    <NavLink className="sign-up-link" to="/login">
                        Log in
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

export default SignUpForm;
