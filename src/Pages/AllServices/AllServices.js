import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Home/Services/ServiceCard';

const AllServices = () => {
    const allServices = useLoaderData();
    return (
        <div>
            <p className='text-6xl font-bold text-center text-fuchsia-600'>All Services</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allServices.map(service => <ServiceCard
                        key={service.service_id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;