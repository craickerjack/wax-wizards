// src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../services/api';

const Register = () => {
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
        registerUser(user)
            .then(response => {
                alert('User registered successfully');
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
