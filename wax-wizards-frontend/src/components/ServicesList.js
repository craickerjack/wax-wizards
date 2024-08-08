// src/components/ServicesList.js
import React, { useState, useEffect } from 'react';
import { getServices } from '../services/api';

const ServicesList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices()
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div>
            <h1>Available Services</h1>
            <ul>
                {services.map(service => (
                    <li key={service.id}>
                        {service.service_name}: {service.description} - ${service.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServicesList;
