import { SingleCocktail } from '../interfaces';

interface PageProps {
  cocktail: SingleCocktail;
  deleteCocktail: (id: string) => void;
}

const Cocktail = ({ cocktail, deleteCocktail }: PageProps) => {
  console.log(cocktail.title);
  return (
    <li key={cocktail.id}>
      <span>{cocktail.title}</span>
      <button onClick={deleteCocktail.bind(null, cocktail.id)}>Delete</button>
    </li>
  );
};

export default Cocktail;
