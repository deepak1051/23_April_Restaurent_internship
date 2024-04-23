// EditRestaurantForm.js
import React, { useState } from 'react';

const EditRestaurantForm = ({ restaurant, updateRestaurant }) => {
  const [name, setName] = useState(restaurant.name);
  const [address, setAddress] = useState(restaurant.address);
  const [pincode, setPincode] = useState(restaurant.pincode);
  const [mobile, setMobile] = useState(restaurant.mobile);
  const [email, setEmail] = useState(restaurant.email);
  const [website, setWebsite] = useState(restaurant.website);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRestaurant = {
      ...restaurant,
      name,
      address,
      pincode,
      mobile,
      email,
      website,
    };
    updateRestaurant(updatedRestaurant);
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <input
        className="border rounded py-2 px-4 mb-2 mr-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border rounded py-2 px-4 mb-2 mr-2"
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <input
        className="border rounded py-2 px-4 mb-2 mr-2"
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        required
      />
      <input
        className="border rounded py-2 px-4 mb-2 mr-2"
        type="text"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
      />
      <input
        className="border rounded py-2 px-4 mb-2 mr-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="border rounded py-2 px-4 mb-2 mr-2"
        type="text"
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        required
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Update Restaurant
      </button>
    </form>
  );
};

export default EditRestaurantForm;
