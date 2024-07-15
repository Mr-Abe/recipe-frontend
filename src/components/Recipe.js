import React from 'react';
import '../styles/Recipe.css';

function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
}

export default Recipe;
