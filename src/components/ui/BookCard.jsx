import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm p-3 outline-gray-200">
            <figure className='p-10 bg-base-300 rounded-2xl'>
                <img className='rounded-2xl h-[250px]'
                    src={book.image}
                    alt="Shoes" />
            </figure>
            <div className='flex gap-3 mt-3'>
                {book.tags.map((tag, index) => (<div key={index} className="badge badge-soft badge-success font-bold">{tag}</div>))}
            </div>
            <div className="card-body p-0 pt-5">
                <h2 className="card-title text-2xl">
                    {book.bookName}

                </h2>
                <p>By: {book.author}</p>

                <div className="card-actions justify-between border-t border-gray-300 border-dashed pt-4 text-xl">
                    <div className="badge p-0 text-bold">{book.category}</div>
                    <div className="badge p-0">{book.rating} <FaRegStar /></div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;