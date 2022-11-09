import React from 'react';
import Banner from '../Banner/Banner';
import CateringService from '../CateringService/CateringService';
import MasalaService from '../MasalaService/MasalaService';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <MasalaService></MasalaService>
            <CateringService></CateringService>
        </div>
    );
};

export default Home;