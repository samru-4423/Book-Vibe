import React from 'react';
import bookImg from '../../assets/pngwing1.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-auto container mx-auto rounded-2xl my-4 ">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between px-20 py-10">
                <img
                    alt="Tailwind CSS hero component"
                    src={bookImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-success mt-10 text-white">View the List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;