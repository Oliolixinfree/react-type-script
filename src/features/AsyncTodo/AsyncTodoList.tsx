import { selectAllTodos } from 'features/Todo/todoSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from 'redux-hooks';
import { Todo } from 'types';
import TodoItem from '../../components/TodoItem';
import { selectAsyncTodos } from './asyncTodoSelector';
import { fetchAllTodos } from './todoAsyncActions';

const AsyncTodoList = () => {
  const { list } = useSelector(selectAsyncTodos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo['id']) => {
    // dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id: Todo['id']) => {
    // dispatch(toggleTodo(id));
  };

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  return (
    <ul>
      {list.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={handleRemoveTodo}
          toggleTodo={handleToggleTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default AsyncTodoList;
