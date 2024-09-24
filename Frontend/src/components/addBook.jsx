import React, { useState } from 'react';

const AddBook = () => {
    const [bookDetails, setBookDetails] = useState({
        title: '',
        author: '',
        category: '',
        price: '',
        description: '',
    });

    const handleChange = (e) => {
        setBookDetails({
            ...bookDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Book Details:', bookDetails);
        // You can add your submission logic here
    };

    return (
        <div className="pt-20">
            <div className="container mx-auto px-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-6 dark:text-white">Add a New Book</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-gray-300">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={bookDetails.title}
                                onChange={handleChange}
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-gray-300">Author</label>
                            <input
                                type="text"
                                name="author"
                                value={bookDetails.author}
                                onChange={handleChange}
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-gray-300">Category</label>
                            <input
                                type="text"
                                name="category"
                                value={bookDetails.category}
                                onChange={handleChange}
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-gray-300">Price (Rs.)</label>
                            <input
                                type="number"
                                name="price"
                                value={bookDetails.price}
                                onChange={handleChange}
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium dark:text-gray-300">Description</label>
                            <textarea
                                name="description"
                                value={bookDetails.description}
                                onChange={handleChange}
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;