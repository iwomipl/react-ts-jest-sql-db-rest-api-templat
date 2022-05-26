import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import './header.css'

export const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (<div className="navigation">
        <h1>My REACT to API App</h1>
        <div className="navigation__elements">
            <NavLink to='/user' className="navigation__button">User</NavLink>
            <NavLink to='/products' className="navigation__button">Product</NavLink>
            <NavLink to='/basket' className="navigation__button">Basket</NavLink>
            {!loggedIn
                ? <div className="signUpOrRegister">
                    <NavLink className="btn" to='/login'>Login</NavLink>
                    <NavLink className="btn" to='/register'>Register</NavLink>
                </div>
                : null}
        </div>


        <hr/>
    </div>)
}