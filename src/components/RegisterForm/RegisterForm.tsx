import React, {ChangeEvent, useState} from "react";

import './RegisterForm.css'
import {Btn} from "../common/Btn/Btn";
import {Input} from "../common/Input/Input";

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
        console.log(form)
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
            <Input
                className="registerFormInput"
                text="Your email"
                type="email"
                value={form.email}
                potentialBr={true}
                function={(e: ChangeEvent<HTMLInputElement>)=> updateForm('email', e.target.value)}
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

            {/*<label className='registerFormInput'>*/}
            {/*    Your password:<br/>*/}
            {/*    <input*/}
            {/*        type="password"*/}
            {/*        onChange={(e)=> updateForm('password', e.target.value)}*/}
            {/*    />*/}
            {/*</label>*/}
            {/*<label className='registerFormInput'>*/}
            {/*    Confirm password:<br/>*/}
            {/*    <input*/}
            {/*        type="password"*/}
            {/*        onChange={(e)=> updateForm('confirmPassword', e.target.value)}*/}
            {/*    />*/}
            {/*</label>*/}

            <Btn text="Register"/>
        </form>
        )
}

//@TODO add basic crossvalidation to password and confirming it.