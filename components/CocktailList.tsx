import React from 'react';
import Cocktail from './Cocktail';
import { SingleCocktail } from '../interfaces';

interface PageProps {
  cocktails: SingleCocktail[];
  deleteCocktail: (id: string) => void;
}

const CocktailList = ({ cocktails, deleteCocktail }: PageProps) => {
  return (
    <ul>
      {cocktails.map((cocktail) => {
        return <Cocktail key={cocktail.id} cocktail={cocktail} deleteCocktail={deleteCocktail} />;
      })}
    </ul>
  );
};

export default CocktailList;
