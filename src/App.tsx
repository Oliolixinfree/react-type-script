import AsyncTodoList from 'features/AsyncTodo/AsyncTodoList';
import NewAsyncTodo from 'features/AsyncTodo/NewAsyncTodo';
import NewTodo from 'features/Todo/NewTodo';
import './App.css';
import TodoList from './features/Todo/TodoList';

function App() {
  return (
    <div className="App">
      <NewTodo />
      <TodoList />

      <hr />
      <NewAsyncTodo />
      <AsyncTodoList />
    </div>
  );
}

export default App;
