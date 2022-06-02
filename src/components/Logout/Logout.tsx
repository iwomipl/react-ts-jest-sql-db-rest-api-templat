import React, { useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeLoggedInValue} from "../../features/loginStatus-slice";

export const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(changeLoggedInValue(false));
        localStorage.removeItem('token');
        navigate('/login');
    }, [])

    return (<></>)
}
