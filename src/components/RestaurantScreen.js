import RestaurantList from './RestaurantList';

export default function RestaurantScreen() {
  const restaurants = [
    { id: 1, name: 'Sushi Place' },
    { id: 2, name: 'Pizza Place' },
  ];

  const loadRestaurants = () => {
    // Implement logic to load restaurants
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList loadRestaurants={loadRestaurants} restaurants={restaurants} />
    </div>
  );
}