import React from 'react';

const MyReviewCard = ({ review, handleDelete }) => {
    const { _id, serviceName, message } = review;

    return (
        <div className="card w-96 bg-base-100 shadow-xl" >
            <div className="card-body">
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn btn-xs">Delete</button>
                    <button className="btn btn-xs btn-primary">Edit</button>
                </div>
                <p className='text-xl text-semibold text-fuchsia-600'>{serviceName}</p>
                <p className='text-semibold'>{message}</p>
            </div>
        </div>
    );
};

export default MyReviewCard;