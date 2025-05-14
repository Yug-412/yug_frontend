import React, { useContext } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import CrudContext from "../context/CrudContext";
import { Link } from "react-router-dom";

function ProductTable() {
    const context = useContext(CrudContext);
    const {
        allItems,
        fetchEditHandal,
        deleteProducts,
        selectedItem,
        getSingleProductView,
        search,
        setSearch,
    } = context;

    const allItemsFilter = allItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="min-h-screen bg-gradient-to-tr from-pink-50 via-blue-100 to-purple-100 p-6">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
                        <input
                            type="text"
                            placeholder="🔍 Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-white bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <h2 className="text-2xl font-bold text-center drop-shadow-lg">
                            React Firebase CRUD
                        </h2>
                        <Link to="/additems" style={{ textDecoration: 'none' }} className="group relative inline-block">
                            <button className="flex items-center gap-2 px-6 py-2 bg-purple-300 text-dark font-semibold rounded-full shadow-md backdrop-blur-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                                <FiPlus className="transition-transform duration-300 group-hover:rotate-90 text-black" />
                                Add Product
                            </button>
                        </Link>

                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        {allItemsFilter.length > 0 ? (
                            <table className="min-w-full text-sm text-left text-gray-700">
                                <thead className="bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 text-white text-xs uppercase tracking-wider shadow-md">
                                    <tr>
                                        <th className="px-6 py-3">S.No.</th>
                                        <th className="px-6 py-3">Image</th>
                                        <th className="px-6 py-3">Name</th>
                                        <th className="px-6 py-3">Price</th>
                                        <th className="px-6 py-3">Category</th>
                                        <th className="px-6 py-3">Size</th>
                                        <th className="px-6 py-3">Date</th>
                                        <th className="px-6 py-3">Edit</th>
                                        <th className="px-6 py-3">View</th>
                                        <th className="px-6 py-3">Delete</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 bg-white">
                                    {allItemsFilter.map((item, index) => {
                                        const { name, image, price, details, size, date } = item;
                                        return (
                                            <tr
                                                key={index}
                                                className="hover:bg-purple-50 transition-all duration-200"
                                            >
                                                <td className="px-6 py-4 font-bold text-purple-700">{index + 1}.</td>
                                                <td className="px-6 py-4">
                                                    <img
                                                        src={image}
                                                        alt="Product"
                                                        className="w-14 h-14 rounded-full object-cover border-2 border-pink-400 shadow-sm"
                                                    />
                                                </td>
                                                <td className="px-6 py-4 font-semibold text-gray-800">{name}</td>
                                                <td className="px-6 py-4 font-bold text-green-600">₹{price}</td>
                                                <td className="px-6 py-4 text-pink-600">{details}</td>
                                                <td className="px-6 py-4 text-gray-800">{size}</td>
                                                <td className="px-6 py-4 text-gray-500">{date}</td>
                                                <td className="px-4 py-4">
                                                    <Link to="/edititems">
                                                        <button
                                                            onClick={() => fetchEditHandal(item)}
                                                            className="flex items-center gap-1 bg-green-100 text-green-600 hover:bg-green-200 px-3 py-2 rounded-full text-xs font-semibold shadow"
                                                        >
                                                            <FiEdit size={14} />
                                                            Edit
                                                        </button>
                                                    </Link>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <button
                                                        type="button"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        onClick={() => getSingleProductView(item.id)}
                                                        className="flex items-center gap-1 bg-blue-100 text-blue-600 hover:bg-blue-200 px-3 py-2 rounded-full text-xs font-semibold shadow"
                                                    >
                                                        <FaEye size={14} />
                                                        View
                                                    </button>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <button
                                                        onClick={() => deleteProducts(item)}
                                                        className="flex items-center gap-1 bg-red-100 text-red-600 hover:bg-red-200 px-3 py-2 rounded-full text-xs font-semibold shadow"
                                                    >
                                                        <FiTrash2 size={14} />
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        ) : (
                            <div className="py-8 text-center font-semibold text-lg text-gray-600">
                                ❌ Product Not Found
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-2xl overflow-hidden shadow-xl">
                        <div className="modal-header bg-purple-600 text-white">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {selectedItem?.name || "Loading..."}
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body bg-white">
                            {selectedItem ? (
                                <div className="text-center">
                                    <img
                                        src={selectedItem.image}
                                        alt={selectedItem.name}
                                        className="w-48 h-48 mx-auto rounded-lg object-cover mb-4 shadow-md"
                                    />
                                    <h3 className="text-xl font-bold text-gray-800">{selectedItem.name}</h3>
                                    <p className="text-gray-600 mt-2">Price: ₹{selectedItem.price}</p>
                                    <p className="text-gray-600">Details: {selectedItem.details}</p>
                                    <p className="text-gray-600">Size: {selectedItem.size}</p>
                                    <p className="text-gray-500 text-sm mt-2">Added on: {selectedItem.date}</p>
                                </div>
                            ) : (
                                <p className="text-center">Loading product...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductTable;
