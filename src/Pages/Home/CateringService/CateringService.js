import React from 'react';
import logo5 from '../../../images/party.jpg';

const CateringService = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-6">
            <figure><img src={logo5} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Catering service for house parties.</h2>
                <p>I provide food catering service for small house parties like birthday party,baby shower party, bridal shower party, mehendi night party, and so on. Feel free to contact with me for this service.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Contact Now</button>
                </div>
            </div>
        </div>
    );
};

export default CateringService;