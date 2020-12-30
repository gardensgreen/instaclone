import React from "react";
import Particles from "react-particles-js";
import { NavLink, Redirect } from "react-router-dom";

import "./LandingPage.css";
export default function LandingPage({ authenticated }) {
    if (authenticated) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <div className="landing__container">
                <div className="header__container">
                    <i className="fab fa-instagram fa-3x"></i>
                    <h1 className="landing-title"></h1>
                </div>
                <div className="main__container">
                    <div className="grid__container">
                        <div className="grid__container-row">
                            <img
                                className="grid-image"
                                src="https://uifaces.co/our-content/donated/3799Ffxy.jpeg"
                            />
                            <img
                                className="grid-image"
                                src="https://uifaces.co/our-content/donated/bUkmHPKs.jpg"
                            />
                            <img
                                className="grid-image"
                                src="https://randomuser.me/api/portraits/men/46.jpg"
                            />
                        </div>
                        <div className="grid__container-row">
                            <img
                                className="grid-image"
                                src="https://randomuser.me/api/portraits/women/95.jpg"
                            />
                            <img
                                className="grid-image"
                                src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
                            />
                            <img
                                className="grid-image"
                                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
                            />
                        </div>
                        <div className="grid__container-row">
                            <img
                                className="grid-image"
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                            />
                            <img
                                className="grid-image"
                                src="https://images.unsplash.com/photo-1500080209535-717dd4ebaa6b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=acddea1fd5f8d1eafd1fc300f280176c"
                            />
                            <img
                                className="grid-image"
                                src="https://uifaces.co/our-content/donated/noplz47r59v1uxvyg8ku.png"
                            />
                        </div>
                    </div>
                    <div className="content__container">
                        <h2 className="content-title">
                            Bringing you closer to the people and things you
                            love.
                        </h2>
                        <NavLink to="/login" className="log-in-button">
                            <span className="log-in-text">Log In</span>
                        </NavLink>
                        <NavLink to="/sign-up" className="sign-up-button">
                            <span className="log-in-text">Sign up</span>
                        </NavLink>
                    </div>
                </div>
                <div className="footer__container">
                    <a href="https://linkedin.com" className="footer-link">
                        Chris Resnick
                    </a>
                    <a href="https://linkedin.com" className="footer-link">
                        Ezra Pinsky
                    </a>
                    <a
                        href="https://github.com/gardensgreen/instaclone"
                        className="footer-link"
                    >
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="https://linkedin.com" className="footer-link">
                        Elijah Hubbard
                    </a>
                    <a href="https://linkedin.com" className="footer-link">
                        Daniel Tillero
                    </a>
                </div>
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
}
