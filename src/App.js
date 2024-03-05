import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter.js'
import IncrementByAmount from './features/counter/incrementByAmount.js'
function App() {
  return (

    <div style={{ margin: '20px' }}>
      <IncrementByAmount/>
      <Counter/>
    </div>
  );
}

export default App;
