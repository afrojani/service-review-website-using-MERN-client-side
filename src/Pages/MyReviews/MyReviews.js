import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-food-server.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to remove this review?');
        if (proceed) {
            fetch(`https://assignment-11-food-server.vercel.app/myreviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myReviews.filter(rvw => rvw._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }



    return (
        <div className='grid place-content-center gap-4 '>

            {
                myReviews.map(review => <MyReviewCard
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                ></MyReviewCard>)
            }
        </div>
    );
};

export default MyReviews;