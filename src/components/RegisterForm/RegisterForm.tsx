import React, {ChangeEvent, useEffect, useState} from "react";

import './RegisterForm.css'
import {Btn} from "../common/Btn/Btn";
import {Input} from "../common/Input/Input";
import {NavLink, useNavigate} from "react-router-dom";
import {fetchFunction} from "../../utils/fetchFunction";
import {changeLoggedInValue} from "../../features/loginStatus-slice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const {loginStatus} = useSelector((store: RootState) => store.loggedInStatus);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        login: '',
        password: '',
        confirmPassword: '',
    })


    useEffect(() => {
        if (loginStatus) navigate('/user');
        (async () => {
            const result = await fetchFunction('user/', 'GET');
            dispatch(changeLoggedInValue(result.loginStatus));
        })();
        if (loginStatus) navigate('/user');
    }, [])

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await fetchFunction('user/register', 'POST', form);
            //@TODO, add next variable to returnedFromServer object, that will solve with looking on message content
            if (!result.message.includes('User could not be created,')) navigate('/login');
        } catch (err) {
            console.log(err)
        }
    }
    return (loginStatus ?
            <></>
            :
            <form
                onSubmit={handleSubmit}
                className='registerForm'
            >
                <Input
                    className="registerFormInput"
                    text="Your login"
                    type="text"
                    value={form.login}
                    potentialBr={true}
                    function={(e: ChangeEvent<HTMLInputElement>) => updateForm('login', e.target.value)}
                />
                <Input
                    className="registerFormInput"
                    text="Your password"
                    type="password"
                    value={form.password}
                    potentialBr={true}
                    function={(e: ChangeEvent<HTMLInputElement>) => updateForm('password', e.target.value)}
                />
                <Input
                    className="registerFormInput"
                    text="Confirm password"
                    type="password"
                    value={form.password}
                    potentialBr={true}
                    function={(e: ChangeEvent<HTMLInputElement>) => updateForm('confirmPassword', e.target.value)}
                />
                <Btn text="Register"/>
                <br/>
                <NavLink to='/login'>Click to Login</NavLink>
            </form>
    )
}

//@TODO add basic crossvalidation to password and confirming it.