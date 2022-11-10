import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/limitservices')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false)
            })
    }, []);

    if (loading) {
        return <button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Processing...
        </button>
    }

    return (
        <div>
            <div className='text-center'>
                <p className='mt-6 text-5xl font-bold text-fuchsia-700'>My Services</p>
                <p className='m-3 text-2xl'>Check out my food services for easy and hassle free eating.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service.service_id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;