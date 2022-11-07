import React from 'react';
import { useRef } from 'react';

interface NewItemProps {
  placeholder: string;
  handleClick: (text: string) => void;
}

const NewItem = ({ handleClick, placeholder }: NewItemProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder={placeholder} />
      <button onClick={onClick}>Add todo</button>
    </>
  );
};

export default NewItem;
