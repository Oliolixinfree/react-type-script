import React, { useState } from 'react';
import './App.css';
import NewTodoForms from './components/NewTodoForms';
import TodoItem from './components/TodoItem';

type Todo = {
  id: string;
};

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [] = useState<string[] | null>(null);
  const [] = useState<Todo | null>(null);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const addTodo = () => {
    setTodos([text, ...todos]);
    setText('');
  };

  return (
    <div className="App">
      <NewTodoForms value={text} onChange={handleInput} handleClick={addTodo} />
      <TodoItem id="1" title="Title" completed={false} style={{ border: '1px solid black' }} />
    </div>
  );
}

export default App;
