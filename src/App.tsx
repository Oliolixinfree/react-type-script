import NewTodo from 'features/Todo/NewTodo';
import './App.css';
import TodoList from './features/Todo/TodoList';

function App() {
  return (
    <div className="App">
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
