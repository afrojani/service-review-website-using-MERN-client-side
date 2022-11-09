import React from 'react';
import logo4 from '../../../images/spices.jpg';

const MasalaService = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-xl mt-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2'>
                    <img src={logo4} alt='' className="rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Homemade Essential Spices</h1>
                    <p className="py-6">Service for all kinds of Fresh and good quality Masalas that yoy will love to collect to make you dishes more tasty.<br></br>
                        Please place order and give me one week to prepare the fresh masalas. </p>
                    <button className="btn btn-primary">See Items</button>
                </div>
            </div>
        </div>
    );
};

export default MasalaService;