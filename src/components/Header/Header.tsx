import React from "react";
import {NavLink} from "react-router-dom";
import './header.css'
import { useSelector} from "react-redux";
import {RootState} from "../../store";

export const Header = () => {
    const {loginStatus} = useSelector((store: RootState) => store.loggedInStatus);

    return (<div className="navigation">
        <h1>My REACT to API App</h1>
        <div className="navigation__elements">
            <NavLink to='/user' className="navigation__button">User</NavLink>
            <NavLink to='/products' className="navigation__button">Product</NavLink>
            <NavLink to='/basket' className="navigation__button">Basket</NavLink>
            {!loginStatus
                ? <div className="signUpOrRegister">
                    <NavLink className="btn" to='/login'>Login</NavLink>
                    <NavLink className="btn" to='/register'>Register</NavLink>
                </div>
                :  <NavLink className="btn" to='/logout'>Logout</NavLink>}
        </div>


        <hr/>
    </div>)
}