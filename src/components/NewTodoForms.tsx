import React from 'react';

interface NewTodoFormsProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

const NewTodoForms = ({ value, onChange, handleClick }: NewTodoFormsProps) => {
  return (
    <>
      <input value={value} onChange={onChange} type="text" placeholder="new todo" />
      <button onClick={handleClick}>Add todo</button>
    </>
  );
};

export default NewTodoForms;
