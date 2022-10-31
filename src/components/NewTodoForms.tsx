import React from 'react';
import { useRef } from 'react';

interface NewTodoFormsProps {
  handleClick: (text: string) => void;
}

const NewTodoForms = ({ handleClick }: NewTodoFormsProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="new todo" />
      <button onClick={onClick}>Add todo</button>
    </>
  );
};

export default NewTodoForms;
