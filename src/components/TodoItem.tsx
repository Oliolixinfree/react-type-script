import React from 'react';
import { Todo } from '../types';

interface TodoItemProps extends Todo {
  toggleTodo: (id: Todo['id']) => void;
  removeTodo: (id: Todo['id']) => void;
  style?: React.CSSProperties;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  toggleTodo,
  removeTodo,
  style = {},
}) => {
  return (
    <li style={{ color: 'teal', backgroundColor: 'white', ...style }}>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
      <span>{title}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>
  );
};

export default TodoItem;
