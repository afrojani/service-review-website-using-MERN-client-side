import React from 'react';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddService = () => {
    document.title = "Add Service";

    // const { user } = useContext(AuthContext);

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const img = form.img.value;


        const service = {
            img,
            title,
            description,
            price,

        }


        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('service added successfully')
                    form.reset();

                }
            })
            .catch(error => console.error(error));


    }

    return (
        <div className='mt-6 bg-slate-200 rounded-xl'>
            <form onSubmit={handleAddService}>


                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="title" type="text" placeholder="Title" className="input input-ghost w-full  input-bordered" required />
                    <input name="price" type="text" placeholder="Prices" className="input input-ghost w-full  input-bordered" required />


                    <input name="description" type="text" placeholder="Description" className="input input-ghost w-full  input-bordered" />
                    <input name="img" type="text" placeholder="Your photo URL" className="input input-ghost w-full  input-bordered" />
                </div>

                <input className='btn' type="submit" value="Submit your review" />
            </form>

        </div>
    );
};

export default AddService;