import React, {ChangeEvent, useState} from "react";

import './RegisterForm.css'
import {Btn} from "../common/Btn/Btn";
import {Input} from "../common/Input/Input";
import {NavLink} from "react-router-dom";
import {fetchFunction} from "../../utils/fetchFunction";

export const RegisterForm = ()=>{
    const [form, setForm] = useState({
        login: '',
        password: '',
        confirmPassword: '',
    })
    const updateForm = (key: string, value:string)=>{
        setForm(form=>({
            ...form,
            [key]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        try {
            const result = await fetchFunction('user/register', form)
            console.log(result);
        } catch (err){
            console.log(err)
        }
        }
    return (<form
            onSubmit={handleSubmit}
            className='registerForm'
        >
            <Input
                className="registerFormInput"
                text="Your login"
                type="text"
                value={form.login}
                potentialBr={true}
                function={(e: ChangeEvent<HTMLInputElement>)=> updateForm('login', e.target.value)}
            />
            <Input
                className="registerFormInput"
                text="Your password"
                type="password"
                value={form.password}
                potentialBr={true}
                function={(e: ChangeEvent<HTMLInputElement>)=> updateForm('password', e.target.value)}
            />
            <Input
                className="registerFormInput"
                text="Confirm password"
                type="password"
                value={form.password}
                potentialBr={true}
                function={(e: ChangeEvent<HTMLInputElement>)=> updateForm('confirmPassword', e.target.value)}
            />
            <Btn text="Register"/>
            <br/>
            <NavLink to='/login'>Click to Login</NavLink>
        </form>
        )
}

//@TODO add basic crossvalidation to password and confirming it.