// src/components/AddService.js
import React, { useState } from 'react';
import { addService } from '../services/api';

const AddService = () => {
    const [service, setService] = useState({
        service_name: '',
        description: '',
        price: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService({
            ...service,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addService(service)
            .then(response => {
                alert('Service added successfully');
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div>
            <h1>Add a Service</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="service_name" placeholder="Service Name" onChange={handleChange} />
                <textarea name="description" placeholder="Description" onChange={handleChange} />
                <input type="number" name="price" placeholder="Price" onChange={handleChange} />
                <button type="submit">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;
