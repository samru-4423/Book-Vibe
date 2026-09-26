import React, { use, useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../components/context/BookProvider';

// const bookPromise = fetch('/booksData.json').then(res => res.json());

const BookDetails = () => {

    const { bookId } = useParams();
    //console.log('bookId', bookId)

    // const books = use(bookPromise);
    // console.log('books', books);

    const books = useLoaderData();
    //console.log('books', books);

    const expectedBook = books.find((book) => book.bookId == bookId);
    //console.log(expectedBook, "expected book");

    const {handleMarkAsRead, storedBooks, handleWishList} = useContext(BookContext)
    // console.log(handleMarkAsRead, storedBooks, 'bookContext')

    

    return (
        <div className="grid grid-cols-2 bg-base-100 container mx-auto">
            <figure className='p-10 bg-base-300 rounded-2xl w-full flex items-center justify-center'>
                <img
                    src={expectedBook.image}
                    alt="Album" className='h-[400px] rounded-xl' />
            </figure>
            <div className="px-6 space-y-4">
                <h2 className="card-title text-4xl">{expectedBook.bookName}</h2>
                <p className='text-[18px] font-semibold pb-3 border-b border-gray-300 border-dashed'>By: {expectedBook.author}</p>
                <p className='text-[18px] font-semibold pb-3 border-b border-gray-300 border-dashed'>{expectedBook.category}</p>
                <p><span className='font-bold'>Review:</span> {expectedBook.review}</p>
                <h2 className='font-bold space-x-3 border-b border-gray-300 border-dashed pb-3'>Tag &ensp;
                    {expectedBook.tags.map((tag, index) => (<div key={index} className="badge badge-soft badge-success font-bold">{tag}</div>))}
                </h2>
                <div className='flex gap-10'>
                    <div>
                        <p>Number of pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className='font-bold'>
                        <p>{expectedBook.totalPages}</p>
                        <p>{expectedBook.publisher}</p>
                        <p>{expectedBook.yearOfPublishing}</p>
                        <p>{expectedBook.rating}</p>
                    </div>
                </div>
                <div className="card-actions">
                    <button className="btn btn-outline" onClick={()=> handleMarkAsRead(expectedBook)}>Mark as Read</button>
                    <button className="btn btn-info text-white" onClick={()=> handleWishList(expectedBook)}>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;