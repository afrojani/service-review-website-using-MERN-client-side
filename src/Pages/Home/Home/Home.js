import React from 'react';
import Banner from '../Banner/Banner';
import CateringService from '../CateringService/CateringService';
import MasalaService from '../MasalaService/MasalaService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MasalaService></MasalaService>
            <CateringService></CateringService>
        </div>
    );
};

export default Home;