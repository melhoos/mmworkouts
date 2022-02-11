import React, { useEffect, useState } from 'react';
import { getRecipes } from '../../services/recipe.service';
import { Recipe } from '../../types/recipe.type';
import RecipeBlock from './recipe';

/*
Henter ut alle oppskriftene
Sender hver oppskrift inn i RecipieBlock-komponenten
*/

const Recipes = (): JSX.Element => {
  const [recipies, setRecipies] = useState<Recipe[]>([]);

  const getAllRecipies = () => {
    getRecipes().then((recipies: Recipe[]) => {
      setRecipies(recipies);
    });
  };

  useEffect(() => {
    // henter ut alle oppskriftene ved render
    getAllRecipies();
  }, []);

  const update = () => {
    getAllRecipies();
  };

  return (
    <div className="recipies">
      {recipies.map((recipe: Recipe) => (
        <RecipeBlock recipe={recipe} triggerUpdate={update} key={recipe.id} />
      ))}
    </div>
  );
};

export default Recipes;
