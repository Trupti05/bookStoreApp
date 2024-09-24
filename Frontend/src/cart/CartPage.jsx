import React from 'react';

const Cart = () => {
    return (
        <div className="pt-20"> {/* Adjusted padding-top for space below the navbar */}
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    {/* Rent Section */}
                    <div className="w-full md:w-1/2 px-4 mb-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h5 className="text-lg font-semibold mb-4 dark:text-white">Rent</h5>
                            <p className="text-gray-600 dark:text-gray-400">Here you can browse and manage books available for rent.</p>
                            {/* Add content related to renting books */}
                        </div>
                    </div>
                    {/* Buy Section */}
                    <div className="w-full md:w-1/2 px-4 mb-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h5 className="text-lg font-semibold mb-4 dark:text-white">Buy</h5>
                            <p className="text-gray-600 dark:text-gray-400">Here you can browse and manage books available for purchase.</p>
                            {/* Add content related to buying books */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;