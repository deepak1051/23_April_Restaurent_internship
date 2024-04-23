// RestaurantTable.js
import React from 'react';

const RestaurantTable = ({ restaurants, deleteRestaurant, editRestaurant }) => {
  return (
    <table className="table-auto w-full mt-4">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Address</th>
          <th className="px-4 py-2">Pincode</th>
          <th className="px-4 py-2">Mobile Number</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Website</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td className="border px-4 py-2">{restaurant.name}</td>
            <td className="border px-4 py-2">{restaurant.address}</td>
            <td className="border px-4 py-2">{restaurant.pincode}</td>
            <td className="border px-4 py-2">{restaurant.mobile}</td>
            <td className="border px-4 py-2">{restaurant.email}</td>
            <td className="border px-4 py-2">{restaurant.website}</td>
            <td className="border px-4 py-2">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                onClick={() => editRestaurant(restaurant)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => deleteRestaurant(restaurant.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RestaurantTable;
