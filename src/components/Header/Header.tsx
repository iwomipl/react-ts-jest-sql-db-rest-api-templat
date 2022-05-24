import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import { LoginForm } from "../LoginForm/LoginForm";

import './header.css'

export const Header = ()=>{
    const [loggedIn, setLoggedIn] = useState(false);
    return (<div className="navigation">
        <div className="navigation__elements">
        <h1>My REACT to API App</h1>
        <NavLink to='/user'>User</NavLink> | <NavLink to='/pruducts'>Products</NavLink> | <NavLink to='/basket'>Basket</NavLink>
        </div>
        {!loggedIn
            ? <div className="navigation__elements">
            <LoginForm/>
        </div>
        : null}
    </div>)
}