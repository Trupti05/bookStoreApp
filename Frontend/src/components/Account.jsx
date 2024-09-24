import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import profilePicture from './profile-picture.png';
import book1 from './book1.png';
import book2 from './book2.png';
import book3 from './book3.png';
import { useAuth } from '../context/AuthProvider';

const Account = () => {
    const [authUser] = useAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (authUser) {
            axios.get(`http://localhost:4001/user/${authUser._id}`)
                .then(response => {
                    setUserData(response.data.user);
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                });
        }
    }, [authUser]);

    if (!authUser) {
        return <div>You need to log in to view this page.</div>;
    }

    return (
        <div className="pt-20"> {/* Adjusted padding-top for space below the navbar */}
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/3 px-4 mb-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={profilePicture}
                                    alt="User"
                                    className="rounded-full w-36 h-36 mb-4"
                                />
                                <div className="mt-3">
                                    <h4 className="text-lg font-semibold dark:text-white">{userData?.fullname || 'Loading...'}</h4>
                                </div>
                            </div>
                        </div>

                          {/* Cart Section */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-6 p-6">
                            <h5 className="text-lg font-semibold mb-4 dark:text-white">Cart</h5>
                            <Link to="/cart">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                    Go to Cart
                                </button>
                            </Link>
                        </div>
                        {/* Add Book Section */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-6 p-6">
                            <h5 className="text-lg font-semibold mb-4 dark:text-white">Add Book</h5>
                            <Link to="/add-book">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                    Add New Book
                                </button>
                            </Link>
                        </div>


                    
                    </div>
                    <div className="w-full md:w-2/3 px-4">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-6 p-6">
                            <div className="mb-4">
                                <h6 className="text-sm font-medium dark:text-gray-300">Full Name</h6>
                                <p className="text-gray-600 dark:text-gray-400">{userData?.fullname || 'Loading...'}</p>
                            </div>
                            <hr className="dark:border-gray-600" />
                            <div className="mb-4">
                                <h6 className="text-sm font-medium dark:text-gray-300">Email</h6>
                                <p className="text-gray-600 dark:text-gray-400">{userData?.email || 'Loading...'}</p>
                            </div>
                            <hr className="dark:border-gray-600" />
                            <div className="mb-4">
                                <h6 className="text-sm font-medium dark:text-gray-300">Address</h6>
                                <p className="text-gray-600 dark:text-gray-400">Parul University, Vadodara.</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h5 className="text-lg font-semibold mb-4 dark:text-white">Books owned</h5>
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full md:w-1/3 px-4 mb-4">
                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow p-4">
                                        <img src={book1} className="w-full h-auto mb-4" alt="Book 1" />
                                        <h5 className="text-sm font-semibold dark:text-gray-200">Book Title 1</h5>
                                        <p className="text-gray-600 dark:text-gray-400">Price: Rs.100</p>
                                        <p className="text-gray-600 dark:text-gray-400">Category: Fiction</p>
                                        <p className="text-gray-600 dark:text-gray-400">Title: The Great Adventure</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 px-4 mb-4">
                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow p-4">
                                        <img src={book2} className="w-full h-auto mb-4" alt="Book 2" />
                                        <h5 className="text-sm font-semibold dark:text-gray-200">Book Title 2</h5>
                                        <p className="text-gray-600 dark:text-gray-400">Price: Rs.150</p>
                                        <p className="text-gray-600 dark:text-gray-400">Category: Non-Fiction</p>
                                        <p className="text-gray-600 dark:text-gray-400">Title: Learning to Code</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 px-4 mb-4">
                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow p-4">
                                        <img src={book3} className="w-full h-auto mb-4" alt="Book 3" />
                                        <h5 className="text-sm font-semibold dark:text-gray-200">Book Title 3</h5>
                                        <p className="text-gray-600 dark:text-gray-400">Price: Rs.170</p>
                                        <p className="text-gray-600 dark:text-gray-400">Category: Science Fiction</p>
                                        <p className="text-gray-600 dark:text-gray-400">Title: Space Odyssey</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
