import React, {ChangeEvent, useState} from "react";
import {Btn} from "../common/Btn/Btn";

import './LoginForm.css'
import {Input} from "../common/Input/Input";
import {NavLink} from "react-router-dom";
import {fetchFunction} from "../../utils/fetchFunction";

export const LoginForm = () => {
    const [form, setForm] = useState({
        login: '',
        password: '',
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
            const result = await fetchFunction('user/login', form)
            console.log(result);
        } catch (err) {
            console.log(err)
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
