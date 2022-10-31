import React, { useEffect, useState } from 'react';
import './App.css';
import NewTodoForms from './components/NewTodoForms';
import TodoItem from './components/TodoItem';
import { Todo } from './types';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const addTodo = () => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setText('');
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data: Todo[]) => {
        setTodos(data);
      });
  }, []);

  return (
    <div className="App">
      <NewTodoForms value={text} onChange={handleInput} handleClick={addTodo} />
      <TodoItem id="1" title="Title" completed={false} style={{ border: '1px solid black' }} />
    </div>
  );
}

export default App;
