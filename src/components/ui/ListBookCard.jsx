import React from 'react';
import { Link } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import { BsPerson } from 'react-icons/bs';
import { PiBookOpenText } from 'react-icons/pi';

const ListBookCard = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="md:card card-side bg-base-100 border border-gray-300 p-5 m-2 md:m-0 rounded-2xl">
            <figure className='px-30 py-15 md:p-15 bg-base-300 rounded-2xl h-auto md:h-[250px] w-full md:w-[250px] sm:flex sm:items-center sm:justify-center '>
                <img className='md:h-auto'
                    src={book.image}
                    alt="Movie" />
            </figure>
            <div className="md:px-10 md:pt-0 pt-5">
                <h2 className="card-title text-3xl mb-5">{book.bookName}</h2>
                <p className='text-xl mb-5'>By : {book.author}</p>
                <div className='md:flex gap-3 font-bold mr-3 mb-5'>Tag &ensp;
                    {book.tags.map((tag, index) => (<div key={index} className="badge badge-soft badge-success font-bold">{tag}</div>))}

                    <div className='flex gap-2 mt-5 md:mt-0'>
                        <CiLocationOn className='text-2xl' />
                        <p className='font-semibold'>Year of Publishing: {book.yearOfPublishing}</p>
                    </div>
                </div>
                <div className='md:flex gap-3 border-b border-gray-300 border-dashed pb-4 mb-5'>
                    <div className='flex gap-3'>
                        <BsPerson className='text-2xl' />
                        <p>Publisher: {book.publisher}</p>
                    </div>
                    <div className='flex gap-3 mt-5 md:mt-0'>
                        <PiBookOpenText className='text-2xl' />
                        <p>Page {book.totalPages}</p>
                    </div>
                </div>
                <div className="card-actions">
                    <button className="btn btn-soft btn-primary rounded-full">Category: {book.category}</button>
                    <button className="btn btn-soft btn-warning rounded-full">Rating: {book.rating}</button>
                    <button className="btn btn-success rounded-full text-white">View Details</button>
                </div>
            </div>
        </Link>
    );
};

export default ListBookCard;