import React from 'react';
import logo3 from '../../../images/img_6899.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={logo3} alt="" className="w-full opacity-60" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/4 backdrop-blur-xl p-2 rounded-lg">
                    <h1 className='text-6xl font-bold text-fuchsia-900'>
                        Home Cooked <br></br>
                        Healthy <br></br>
                        Bengali Food <br></br>
                        Service
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-24 top-1/2 backdrop-blur-xl p-2 rounded-lg">
                    <p className='text-fuchsia-900 font-semibold text-2xl'>Satisfy your appetite for bengali food with my homemade-food service.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;