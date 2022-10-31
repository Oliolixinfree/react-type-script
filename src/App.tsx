import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <TodoItem id="1" title="Title" completed={false} />
    </div>
  );
}

export default App;
