import React, { useState} from "react";

import './LoginForm.css'

export const LoginForm = ()=>{
    const [form, setForm] = useState({
        login: '',
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
            const result = await fetch('http://localhost:3001', {
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
                login:
                <input
                    type="text"
                    onChange={(e)=> updateForm('login', e.target.value)}
                />
            </label>

            <label className='loginFormInput'>
                password:
                <input
                    type="password"
                    onChange={(e)=> updateForm('password', e.target.value)}
                />
            </label>

            <button type="submit">Login</button>
        </form>
    )
}
