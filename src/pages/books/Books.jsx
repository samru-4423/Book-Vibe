import React, { useContext, useState } from 'react';
import { BookContext } from '../../components/context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBooks/ListedReadList';
import ListedWishList from '../../components/listedBooks/ListedWishList';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Books = () => {

    const { storedBooks, wishList } = useContext(BookContext)
    //console.log(storedBooks, wishList, 'bookContext')

    const [sortingType, setSortingtype] = useState('');
    //console.log(sortingType, "sorting type")

    return (
        <div className='container mx-auto'>
            <div className='bg-gray-200 text-center font-bold text-2xl py-5 rounded-2xl mb-5'>
                <h2>Books</h2>
            </div>

            <div className=' flex items-center justify-center'>
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white">Sort By {sortingType}  <RiArrowDropDownLine className='text-3xl' /></div>
                    <ul tabIndex={-1} className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=> setSortingtype('pages')}><a>Pages</a></li>
                        <li onClick={()=> setSortingtype('rating')}><a>Rating</a></li>
                    </ul>
                </div>
            </div>


            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList sortingType={sortingType}></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList sortingType={sortingType}></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;