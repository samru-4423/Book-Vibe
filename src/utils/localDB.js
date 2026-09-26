const getAllReadListFromLocalDB = () =>{
    const allReadList = localStorage.getItem("storedBooks");
    console.log(allReadList, 'readlist from local db')

    if(allReadList) return JSON.parse(allReadList);

    return [];
}

const addReadListToLocalDB = (book) =>{
    const allBooks = getAllReadListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);
    if(!isAlreadyExist){
        allBooks.push(book);
        localStorage.setItem("storedBooks", JSON.stringify(allBooks))
    }
}

const getAllWishListFromLocalDB = () =>{
    const allWishList = localStorage.getItem("wishList");
    console.log(allWishList, 'wishlist from local db')

    if(allWishList) return JSON.parse(allWishList);

    return [];
}

const addWishListToLocalDB = (book) =>{
    const allBooks = getAllWishListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);
    if(!isAlreadyExist){
        allBooks.push(book);
        localStorage.setItem("wishList", JSON.stringify(allBooks))
    }
}

export{getAllReadListFromLocalDB, addReadListToLocalDB, getAllWishListFromLocalDB, addWishListToLocalDB}