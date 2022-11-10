import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import CateringService from '../CateringService/CateringService';
import MasalaService from '../MasalaService/MasalaService';
import Services from '../Services/Services';

const Home = () => {
    document.title = "Bengali Savory/Home";
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className='grid place-content-center m-6'>
                <Link to='/services'>
                    <button className="btn btn-active btn-primary">See All</button>
                </Link>
            </div>
            <MasalaService></MasalaService>
            <CateringService></CateringService>
        </div>
    );
};

export default Home;