// src/components/Home.js
import React, { useState } from 'react';
import { createCheckoutSession } from '../services/api';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key');

const Home = () => {
    const [service, setService] = useState({
        service_name: '',
        amount: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService({
            ...service,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const stripe = await stripePromise;
        const response = await createCheckoutSession(service);
        const result = await stripe.redirectToCheckout({
            sessionId: response.data.id,
        });
        if (result.error) {
            console.error(result.error.message);
        }
    };

    return (
        <div>
            <h1>Book a Service</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="service_name" placeholder="Service Name" onChange={handleChange} />
                <input type="number" name="amount" placeholder="Amount" onChange={handleChange} />
                <button type="submit">Book</button>
            </form>
        </div>
    );
};

export default Home;
