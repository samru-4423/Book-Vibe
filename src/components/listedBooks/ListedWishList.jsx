import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../context/BookProvider';
import BookCard from '../ui/BookCard';
import ListBookCard from '../ui/ListBookCard';

const ListedWishList = ({sortingType}) => {
    const { storedBooks, wishList } = useContext(BookContext)
    console.log(storedBooks, wishList, 'bookContext')
    const [filteredWishList, setfilteredWishList] = useState(wishList);
    
        // with use Effect (1)
        useEffect(()=>{
            if(sortingType){
                if(sortingType === 'pages'){
                    const sortedData = [...wishList].sort((a,b) => a.totalPages - b.totalPages)
                    console.log(sortedData, "sorted data")
                    setfilteredWishList(sortedData);
                }
                else if(sortingType === 'rating'){
                    const sortedData = [...wishList].sort((a,b) => a.rating - b.rating)
                    console.log(sortedData, "sorted data")
                    setfilteredWishList(sortedData);
                } 
            }
        }, [sortingType, wishList])
    
        // with conditional variable (2)
        // let filteredWishList = wishList;
    
        // if(sortingType === 'pages'){
        //     filteredWishList = [...wishList].sort((a,b) => a.totalPages - b.totalPages)
        // }
        // else if(sortingType === 'rating'){
        //     filteredWishList = [...wishList].sort((a,b) => a.rating - b.rating)
        // }

    if(filteredWishList.length === 0){
        return <div className='h-[50vh] bg-gray-200 flex items-center justify-center rounded-2xl'>
            <h2 className='text-3xl font-bold'>No wish list data found</h2>
        </div>
    }

    return (
        <div className='grid grid-cols-1 gap-3'>
            {
                filteredWishList.map((book, index) => <ListBookCard key={index} book={book}></ListBookCard>)
            }
        </div>
    );
};

export default ListedWishList;