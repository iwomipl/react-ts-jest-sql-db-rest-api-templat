import React from "react";
import {NavLink} from "react-router-dom";

import './header.css'

export const Header = ()=>{

    return (<div className="navigation">
        <h1>My REACT to API App</h1>
        <NavLink to='/user'>User</NavLink> | <NavLink to='/pruducts'>Products</NavLink> | <NavLink to='/basket'>Basket</NavLink> <hr/>
    </div>)
}