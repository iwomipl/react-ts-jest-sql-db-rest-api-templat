import React, {ChangeEvent, useEffect, useState} from "react";
import {Btn} from "../common/Btn/Btn";
import './LoginForm.css'
import {Input} from "../common/Input/Input";
import {NavLink, useNavigate} from "react-router-dom";
import {fetchFunction} from "../../utils/fetchFunction";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {changeLoggedInValue} from "../../features/loginStatus-slice";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const {loginStatus} = useSelector((store: RootState) => store.loggedInStatus);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        login: '',
        password: '',
    })

    useEffect(()=>{
        loginStatus ?? navigate('/user');
    })
    const updateForm = (key: string, value: string): void => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await fetchFunction('user/login', 'POST', form);
            if (result.loginStatus === true) {
                dispatch(changeLoggedInValue(result.loginStatus));
                navigate('/user');
            } else {
                navigate('/login');
            }
        } catch (err) {
            console.log('error ', err)
        }
    }
    return (<form
            onSubmit={handleSubmit}
            className='loginForm'
        >
            <Input
                className="loginFormInput"
                text="Your login"
                type="text"
                value={form.login}
                potentialBr={true}
                function={(e: ChangeEvent<HTMLInputElement>) => updateForm('login', e.target.value)}
            />
            <Input
                className="loginFormInput"
                text="password"
                type="password"
                value={form.login}
                potentialBr={true}
                function={(e: ChangeEvent<HTMLInputElement>) => updateForm('password', e.target.value)}
            />
            <Btn text="Login"/>
            <br/>
            <NavLink to='/register'>Click to Register</NavLink>
        </form>
    )
}
