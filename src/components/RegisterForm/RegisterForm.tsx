import React, { useState} from "react";

import './RegisterForm.css'

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
            className='registerForm'
        >
            <label className='registerFormInput'>
                Your login:<br/>
                <input
                    type="text"
                    onChange={(e)=> updateForm('login', e.target.value)}
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

            <button type="submit">Register</button>
        </form>
        )
}

//@TODO add basic crossvalidation to password and confirming it.