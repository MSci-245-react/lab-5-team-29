import RestaurantScreen from './components/RestaurantScreen.js';
import Counter from './features/counter/counter.js'
import IncrementByAmount from './features/counter/incrementByAmount.js'

export default function App() {
  return (
    <div style={{ margin: '20px' }}>
      <RestaurantScreen />

      <IncrementByAmount/>
      <Counter/>
    </div>
  );
}
