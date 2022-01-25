import React, { useRef } from 'react';
import { SingleCocktail } from '../interfaces';

interface PageProps {
  addCocktail: (text: string) => void;
}

const InputCocktail = ({ addCocktail }: PageProps) => {
  const formInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    const inputText = formInputRef.current!.value;
    addCocktail(inputText);
    formInputRef.current!.value = '';
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='cocktailInput'>Input a Cocktail</label>
        <input type='text' id='cocktailInput' ref={formInputRef} required />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default InputCocktail;
