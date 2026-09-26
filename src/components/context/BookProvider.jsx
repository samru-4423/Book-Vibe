import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from '../../utils/localDB';

export const BookContext = createContext();

const BookProvider = ({children}) => {

    const [storedBooks, setStoredBooks] = useState(()=> getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState(()=> getAllWishListFromLocalDB());

    // useEffect(()=>{
    //     const getReadListFromLocalDB = getAllReadListFromLocalDB();
    //     console.log(getReadListFromLocalDB, 'getReadListFromLocalDB')
    //     setStoredBooks(getReadListFromLocalDB)
    // }, [])

    const handleMarkAsRead = (currentBook) =>{

        addReadListToLocalDB(currentBook);
        
        const isExistInWishList = wishList.find(book => book.bookId === currentBook.bookId)
        if(isExistInWishList){
            toast.error("The book is already in wish list");
            return;
        }
        
        const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId)
        if (isExistBook){
            toast.error('The book is already exist.')
        }
        else{
            setStoredBooks([...storedBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to the read list`)
        }
        console.log(currentBook,storedBooks, 'currentbook')
    }

    const handleWishList = (currentBook) =>{

        addWishListToLocalDB(currentBook)

        const isExistInReadList = storedBooks.find(book => book.bookId === currentBook.bookId)
        if(isExistInReadList){
            toast.error("The book is already in read list");
            return;
        }
        
        const isExistBook = wishList.find(book => book.bookId === currentBook.bookId)
        if (isExistBook){
            toast.error('The book is already exist.')
        }
        else{
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} is added to the wish list`)
        }

        console.log(currentBook,storedBooks, 'currentbook')
    }

    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    }
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;