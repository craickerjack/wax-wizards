// src/components/Login.js
import React, { useState } from 'react';
import { loginUser } from '../services/api';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(user)
            .then(response => {
                alert('Login successful');
                // Save the token and use it for authenticated requests
                localStorage.setItem('token', response.data.token);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
