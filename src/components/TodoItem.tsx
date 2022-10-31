import React, { useState } from 'react';

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  style?: React.CSSProperties;
}

type Todo = {
  id: string;
};

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, style = {} }) => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [] = useState<string[] | null>(null);
  const [] = useState<Todo | null>(null);

  return (
    <li style={{ color: 'teal', backgroundColor: 'white', ...style }}>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>&times;</span>
    </li>
  );
};

export default TodoItem;
