import React from 'react';

function ProductTable() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] p-10 text-white font-sans">
            {/* Header with Styled Search and Button */}
            <div className="flex justify-between items-center mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-xl shadow-xl">
                {/* Title with Icon */}
                <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h4l2 2h8a1 1 0 011 1v2H3V4z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M9 16h6m-6 4h6m-9-8h12a1 1 0 001-1V8a1 1 0 00-1-1H6l-2-2v13a1 1 0 001 1h16a1 1 0 001-1v-3H6a1 1 0 01-1-1z" />
                    </svg>
                    <h1 className="text-3xl font-bold tracking-wide">React Firebase CRUD Dashboard</h1>
                </div>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="🔍 Search products..."
                    className="w-1/3 px-4 py-2 border border-cyan-300 bg-white/10 text-white placeholder-cyan-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition duration-200"
                />

                {/* Add Product Button */}
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 px-6 py-2 rounded-full shadow-lg font-semibold transition duration-300">
                    + Add Product
                </button>
            </div>

            {/* Table Section */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-2xl p-6">
                <div className="overflow-auto rounded-lg">
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm uppercase">
                                <th className="px-4 py-3 text-left">S.No.</th>
                                <th className="px-4 py-3 text-left">Product Image</th>
                                <th className="px-4 py-3 text-left"> Name</th>
                                <th className="px-4 py-3 text-left">Price</th>
                                <th className="px-4 py-3 text-left">Category</th>
                                <th className="px-4 py-3 text-left"> Size</th>
                                <th className="px-4 py-3 text-left">Date</th>
                                <th className="px-4 py-3 text-left">Delete</th>
                                <th className="px-4 py-3 text-left">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Example row */}
                            <tr className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-200">
                                <td className="px-4 py-3">1</td>
                                <td className="px-4 py-3">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt="product"
                                        className="w-12 h-12 rounded object-cover"
                                    />
                                </td>
                                <td className="px-4 py-3">Sample Product</td>
                                <td className="px-4 py-3">₹999</td>
                                <td className="px-4 py-3">Electronics</td>
                                <td className="px-4 py-3">2025-05-13</td>
                                <td className="px-4 py-3">
                                    <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400 px-4 py-1 rounded-full text-white font-medium shadow-md">
                                        Delete
                                    </button>
                                </td>
                                <td className="px-4 py-3">
                                    <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 px-4 py-1 rounded-full text-white font-medium shadow-md">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductTable;
