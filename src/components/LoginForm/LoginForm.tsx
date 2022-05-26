import React, {ChangeEvent, useState} from "react";
import { Btn } from "../common/Btn/Btn";

import './LoginForm.css'
import {Input} from "../common/Input/Input";

export const LoginForm = ()=>{
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const updateForm = (key: string, value:string): void=>{
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
            <Input
                className="loginFormInput"
                text="email"
                type="email"
                value={form.email}
                function={(e: ChangeEvent<HTMLInputElement>)=> updateForm('email', e.target.value)}
            />
            <Input
                className="loginFormInput"
                text="password"
                type="password"
                value={form.email}
                function={(e: ChangeEvent<HTMLInputElement>)=> updateForm('password', e.target.value)}
            />
            <Btn text="Login"/>
        </form>
    )
}
