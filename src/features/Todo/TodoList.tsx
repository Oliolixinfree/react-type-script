import React from 'react';
import { useAppDispatch, useAppSelector } from 'redux-hooks';
import { Todo } from 'types';
import TodoItem from '../../components/TodoItem';
import { removeTodo, toggleTodo } from './todoSlice';

const TodoList = () => {
  const list = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id: Todo['id']) => {
    dispatch(toggleTodo(id));
  };

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

export default TodoList;
