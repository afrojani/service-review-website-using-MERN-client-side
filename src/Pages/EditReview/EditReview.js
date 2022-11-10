import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    document.title = "Edit Review";
    const savedReview = useLoaderData();
    console.log(savedReview);
    const [review, setReview] = useState(savedReview);

    const handleUpdateMessage = event => {
        event.preventDefault();

        fetch(`https://assignment-11-food-server.vercel.app/myreviews/${savedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('review updated')
                    console.log(data);
                }

            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }
    return (
        <div>
            <p>{savedReview.message}</p>
            <form onSubmit={handleUpdateMessage} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Edit Review</span>
                    </label>
                    <input onBlur={handleInputChange} defaultValue={savedReview.message} type="text" name="message" placeholder="Edit review" className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Submit" />
                    {/* <button className="btn btn-primary">Login</button> */}
                </div>
            </form>
        </div>
    );
};

export default EditReview;