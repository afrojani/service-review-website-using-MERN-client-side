import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetail = () => {
    document.title = "Details";
    const oneService = useLoaderData();
    const { title, img, ratings, prices, description, menu, _id } = oneService;

    const { user } = useContext(AuthContext);

    // ----All reviews show

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-food-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    // -----ADD review section-------

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const photoURL = user?.photoURL || 'unregistered';

        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            prices,
            customer: name,
            email,
            photoURL,
            message
        }


        fetch('https://assignment-11-food-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review added successfully')
                    form.reset();

                }
            })
            .catch(error => console.error(error));


    }

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold text-fuchsia-700">{title}</h2>

                    <div>
                        <p>{description}</p>
                        <p className=' font-bold'>Rating: {ratings}</p>
                        <p className=' font-bold'>Price Range: {prices}</p>
                    </div>

                    {/* menu item show in table*/}
                    <div className="overflow-x-auto">
                        <p className=' font-bold text-fuchsia-700 p-2'>Menu:</p>
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menu.map(item => <div key={item.name}>
                                        <tr>

                                            <td>{item.name}</td>

                                            <td>{item.price}</td>
                                        </tr>
                                    </div>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* All reviews section */}

            <div className="overflow-x-auto my-6">
                <p className='text-xl font-bold text-fuchsia-700 p-2'>All Reviews:</p>
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <div key={review._id}>
                                <tr>

                                    <td><img className='rounded-full w-8 h-8' src={review.photoURL} alt="" /></td>

                                    <td>{review.customer}</td>
                                    <td>{review.message}</td>
                                </tr>
                            </div>)
                        }

                    </tbody>
                </table>
            </div>



            {/* ----ADD review section */}

            <div className='mt-6 bg-slate-200 rounded-xl'>
                {
                    user?.uid ?
                        <>
                            <form onSubmit={handleAddReview}>


                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <input name="name" type="text" placeholder="Name" className="input input-ghost w-full  input-bordered" required />


                                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                                    <input name="photoURL" type="text" placeholder="Your photo URL" defaultValue={user?.photoURL} className="input input-ghost w-full  input-bordered" readOnly />
                                </div>
                                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>

                                <input className='btn' type="submit" value="Submit your review" />
                            </form>
                        </>
                        :
                        <>
                            <p className='p-4 text-center font-bold text-xl text-fuchsia-900'>Please <Link to='/login'><button className="btn btn-sm btn-outline btn-success">Login</button></Link> to add a review</p>
                        </>
                }

            </div>
        </div>

    );
};

export default ServiceDetail;