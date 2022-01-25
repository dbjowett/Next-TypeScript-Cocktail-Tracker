import { useState } from 'react';
import type { NextPage } from 'next';
import { SingleCocktail } from '../interfaces';

import CocktailList from '../components/CocktailList';
import InputCocktail from '../components/InputCocktail';

const Home: NextPage = () => {
  const [cocktails, setCocktails] = useState<SingleCocktail[]>([]);

  const addCocktail = (text: string) => {
    const id = Math.random().toString();
    setCocktails((prevCocktails) => [{ id: id, title: text }, ...prevCocktails]);
  };

  const deleteCocktail = (id: string) => {
    setCocktails((prevCocktails) => {
      return prevCocktails.filter((item) => item.id !== id);
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Cocktails To Try</h1>
      <InputCocktail addCocktail={addCocktail} />
      <CocktailList cocktails={cocktails} deleteCocktail={deleteCocktail} />
    </div>
  );
};

export default Home;
