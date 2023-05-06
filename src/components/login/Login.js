import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAuth } from '../../redux/actions/postAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const token = useSelector((store) => store.auth.token)
    const error = useSelector((store) => store.auth.error)

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isPassword, setIsPassword] = useState(false)


    useEffect(() => {
        if(token){
            navigator('/meals')
        }
    }, [token])

    const submit = () => {
        const user = {
            email: userName,
            password
        }
        dispatch(postAuth(user))
        //navigator.push('/meals')
    }

    return (
        <div className='login'> 
            <div>
                <label>Username: </label>
                <input 
                    type='text'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <label>Password: </label>
                <input 
                    type={isPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={() => setIsPassword(!isPassword)}>Ver contraseña</button>
            </div>
            <div>
                {
                    error  
                }
            </div>
            <button onClick={submit}>Login</button>
        </div>
    );
};

export default Login;