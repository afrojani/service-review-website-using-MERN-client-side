import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const oneService = useLoaderData();
    const { title, img, ratings, prices, description, menu } = oneService;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold text-fuchsia-700">{title}</h2>

                <div>
                    <p>{description}</p>
                    <p className=' font-bold'>Rating: {ratings}</p>
                    <p className=' font-bold'>Price Range: {prices}</p>
                </div>

                {/* menu */}
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map(item => <>
                                    <tr>

                                        <td>{item.name}</td>

                                        <td>{item.price}</td>
                                    </tr>
                                </>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;