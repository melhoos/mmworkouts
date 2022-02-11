import React from 'react';
import { Recipe } from '../../types/recipe.type';
import Button from '@mui/material/Button';
import { updateRecipe } from '../../services/recipe.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface Props {
  recipe: Recipe;
  triggerUpdate: (id: number) => void;
}

const RecipeBlock = (props: Props): JSX.Element => {
  const { recipe, triggerUpdate } = props;
  const onClickLike = () => {
    // oppdaterer oppskriften med +1 like
    const updatedRecipie: Recipe = { ...recipe, likes: recipe.likes + 1 };
    updateRecipe(updatedRecipie).then(() => {
      // trigger update
      triggerUpdate(recipe.id);
    });
  };
  return (
    <div className="recipie">
      <p>
        {recipe.title}
        <Button onClick={onClickLike}>
          <FontAwesomeIcon icon={faHeart} /> {recipe.likes}
        </Button>
      </p>
    </div>
  );
};

export default RecipeBlock;
