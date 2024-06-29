import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Count: {count}</h1>
        <div className="d-flex flex-col">
          <button onClick={() => setCount(count + 1)} className='btn btn-success'>Increase</button>
          <button onClick={() => setCount(count - 1)} className='btn btn-danger'>Decrease</button>
        </div>
      </header>
    </div>
  );
}

export default App;
