import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, title, ratings, prices, description } = service;

    const smallDes = description.slice(0, 100);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </PhotoView>
                </PhotoProvider>



            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>Ratings: {ratings}</p>
                <p>Price Range: tk {prices}</p>
                <p>{smallDes}...</p>
                <div className="card-actions">
                    <Link to={`/services/${service._id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;