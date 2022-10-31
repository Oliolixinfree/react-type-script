import React from 'react';

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
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
