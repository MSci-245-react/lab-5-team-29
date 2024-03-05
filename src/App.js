import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter.js'
import IncrementByAmount from './features/counter/IncrementByAmount.js'
function App() {
  return (

    <div>
      <IncrementByAmount/>
      <Counter/>
    </div>
  );
}

export default App;
