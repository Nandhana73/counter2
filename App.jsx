import React from 'react';
import './App.css';
import ClassCounter from './ClassCounter';
import FunctionCounter from './FunctionCounter';

function App() {
  return (
    <div className="App">
      <h1>Assignment-2: Counter Application</h1>
      <div className="counter-row">
        <div>
          <h2>Class Component</h2>
          <ClassCounter />
        </div>
        <div>
          <h2>Function Component</h2>
          <FunctionCounter />
        </div>
      </div>
    </div>
  );
}

export default App;
