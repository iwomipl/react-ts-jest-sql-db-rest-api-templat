import React, { useState} from "react";
import { Btn } from "../common/Btn/Btn";

import './LoginForm.css'

export const LoginForm = ()=>{
    const [form, setForm] = useState({
        email: '',
        password: '',
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
            const result = await fetch('http://localhost:3001/user/login', {
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
            className='loginForm'
        >
            <label className='loginFormInput'>
                email:
                <input
                    type="email"
                    onChange={(e)=> updateForm('email', e.target.value)}
                />
            </label>

            <label className='loginFormInput'>
                password:
                <input
                    type="password"
                    onChange={(e)=> updateForm('password', e.target.value)}
                />
            </label>

            <Btn text="Login"/>
        </form>
    )
}
