// AddRestaurantForm.js
import React, { useState } from 'react';

const AddRestaurantForm = ({ addRestaurant }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = {
      id: Date.now(),
      name,
      address,
      pincode,
      mobile,
      email,
      website,
    };
    addRestaurant(newRestaurant);
    setName('');
    setAddress('');
    setPincode('');
    setMobile('');
    setEmail('');
    setWebsite('');
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
        Add Restaurant
      </button>
    </form>
  );
};

export default AddRestaurantForm;
