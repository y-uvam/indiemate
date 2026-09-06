import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainStack } from './navigation';
import './tailwind-output.css';
import './index.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainStack />
      </div>
    </BrowserRouter>
  );
}

export default App;

