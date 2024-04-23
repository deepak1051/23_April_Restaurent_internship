// App.js
import { useState, useEffect } from 'react';
import RestaurantTable from './components/RestaurantTable';
import AddRestaurantForm from './components/AddRestaurantForm';
import EditRestaurantForm from './components/EditRestaurantForm';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editRestaurant, setEditRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('/restaurants.json');
      if (!response.ok) {
        throw new Error('Failed to fetch restaurants');
      }
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
    setShowAddForm(false);
  };

  const deleteRestaurant = (id) => {
    const updatedRestaurants = restaurants.filter(
      (restaurant) => restaurant.id !== id
    );
    setRestaurants(updatedRestaurants);
  };

  const editRestaurantHandler = (restaurant) => {
    setEditRestaurant(restaurant);
    setShowEditForm(true);
  };

  const updateRestaurant = (updatedRestaurant) => {
    const updatedRestaurants = restaurants.map((restaurant) =>
      restaurant.id === updatedRestaurant.id ? updatedRestaurant : restaurant
    );
    setRestaurants(updatedRestaurants);
    setShowEditForm(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Restaurant Listing App</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => setShowAddForm(true)}
      >
        Add Restaurant
      </button>
      {showAddForm && <AddRestaurantForm addRestaurant={addRestaurant} />}
      {showEditForm && (
        <EditRestaurantForm
          restaurant={editRestaurant}
          updateRestaurant={updateRestaurant}
        />
      )}
      <RestaurantTable
        restaurants={restaurants}
        deleteRestaurant={deleteRestaurant}
        editRestaurant={editRestaurantHandler}
      />
    </div>
  );
};

export default App;
