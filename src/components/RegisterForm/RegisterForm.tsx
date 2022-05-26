import React, { useState} from "react";

import './RegisterForm.css'
import {Btn} from "../common/Btn/Btn";

export const RegisterForm = ()=>{
    const [form, setForm] = useState({
        email: '',
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
            const result = await fetch('http://localhost:3001/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data: {} = await result.json();
            console.log(data);
        } catch (err){
            console.log(err)
        }
        }
    return (<form
            onSubmit={handleSubmit}
            className='registerForm'
        >
            <label className='registerFormInput'>
                Your email:<br/>
                <input
                    type="email"
                    onChange={(e)=> updateForm('email', e.target.value)}
                />
            </label>

            <label className='registerFormInput'>
                Your password:<br/>
                <input
                    type="password"
                    onChange={(e)=> updateForm('password', e.target.value)}
                />
            </label>
            <label className='registerFormInput'>
                Confirm password:<br/>
                <input
                    type="password"
                    onChange={(e)=> updateForm('confirmPassword', e.target.value)}
                />
            </label>

            <Btn text="Register"/>
        </form>
        )
}

//@TODO add basic crossvalidation to password and confirming it.