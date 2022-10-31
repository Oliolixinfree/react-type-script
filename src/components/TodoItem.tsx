import React, { useState } from 'react';
import { Todo } from '../types';

interface TodoItemProps extends Todo {
  style?: React.CSSProperties;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, style = {} }) => {
  return (
    <li style={{ color: 'teal', backgroundColor: 'white', ...style }}>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>&times;</span>
    </li>
  );
};

export default TodoItem;
