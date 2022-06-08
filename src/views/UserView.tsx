import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LoginForm} from "../components/LoginForm/LoginForm";
import {RootState} from "../store";
import {Input} from "../components/common/Input/Input";
import {Btn} from "../components/common/Btn/Btn";
import {fetchFunction} from "../utils/fetchFunction";
import {changeLoggedInValue} from "../features/loginStatus-slice";
import {useNavigate} from "react-router-dom";


export const UserView = () => {
    const dispatch = useDispatch();
    let {loginStatus} = useSelector((store: RootState) => store.loggedInStatus);
    const navigate = useNavigate();
    const [password, setPassword] = useState('');


    //@TODO fix problem with loosing loginStatus while reloding site. Redux is not keeping state, so it must be checked everytime the page loads. or i have to change architecture of app
    //now the problem is that app deletes token wile repeating fetchFunction and views
    useEffect(() => {
        (async () => {
            const result = await fetchFunction('user/', 'GET');
            dispatch(changeLoggedInValue(result.loginStatus));
        })();

    }, []);

    const updatePassword = (value: string): void => {
        setPassword(value);
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await fetchFunction('user/', 'DELETE', {password: password});
            if (result.message === 'User Deleted') {
                localStorage.removeItem('token');
                dispatch(changeLoggedInValue(result.loginStatus));
                navigate('/login');
            } else {
                navigate('/user');
            }
        } catch (err) {
            console.log('error ', err)
        }
    }
    return <>{loginStatus ?
        <form
            onSubmit={handleSubmit}
            className='loginForm'>
            <Input
                className="loginFormInput"
                text="password"
                type="password"
                value={password}
                potentialBr={true}
                function={(e: ChangeEvent<HTMLInputElement>) => updatePassword(e.target.value)}
            />
            <Btn text="Delete your account"/>
        </form> :
        <><p>You should login first to see setting of Your account.</p><LoginForm/></>}</>
}