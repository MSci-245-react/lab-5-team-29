import RestaurantScreen from './components/RestaurantScreen.js';
import Counter from './features/counter/Counter.js'
import IncrementByAmount from './features/counter/IncrementByAmount.js'
import TodoApp from "./TodoApp";

export default function App() {
  return (
    <div style={{ margin: '20px' }}>
      {/* <RestaurantScreen />

      <IncrementByAmount/>
      <Counter/> */}

      <TodoApp />

    </div>
  );
}
