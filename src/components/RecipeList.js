import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import '../styles/RecipeList.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="recipe-list">
      {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
    </div>
  );
}

export default RecipeList;
