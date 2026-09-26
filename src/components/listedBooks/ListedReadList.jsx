import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../context/BookProvider';
import BookCard from '../ui/BookCard';
import ListBookCard from '../ui/ListBookCard';

const ListedReadList = ({sortingType}) => {
    const { storedBooks, wishList } = useContext(BookContext)
    console.log(storedBooks, wishList, 'bookContext')
    const [filteredReadList, setfilteredReadList] = useState(storedBooks);

    // with use Effect (1)
    useEffect(()=>{
        if(sortingType){
            if(sortingType === 'pages'){
                const sortedData = [...storedBooks].sort((a,b) => a.totalPages - b.totalPages)
                console.log(sortedData, "sorted data")
                setfilteredReadList(sortedData);
            }
            else if(sortingType === 'rating'){
                const sortedData = [...storedBooks].sort((a,b) => a.rating - b.rating)
                console.log(sortedData, "sorted data")
                setfilteredReadList(sortedData);
            } 
        }
    }, [sortingType, storedBooks])

    // with conditional variable (2)
    // let filteredReadList = storedBooks;

    // if(sortingType === 'pages'){
    //     filteredReadList = [...storedBooks].sort((a,b) => a.totalPages - b.totalPages)
    // }
    // else if(sortingType === 'rating'){
    //     filteredReadList = [...storedBooks].sort((a,b) => a.rating - b.rating)
    // }

    if (filteredReadList.length === 0) {
        return <div className='h-[50vh] bg-gray-200 flex items-center justify-center rounded-2xl'>
            <h2 className='text-3xl font-bold'>No read list data found</h2>
        </div>
    }

    return (
        <div className='grid grid-cols-1 gap-3'>
            {
                filteredReadList.map((book, index) => <ListBookCard key={index} book={book}></ListBookCard>)
            }
        </div>
    );
};

export default ListedReadList;