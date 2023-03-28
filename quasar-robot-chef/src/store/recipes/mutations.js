export function SET_RECIPES(state, recipe) {
  state.recipes.unshift(recipe);
}

export function SET_RECIPES_2(state, recipes) {
  state.recipe = recipes;
}

export function SET_INGREDIENTS(state, ingredients) {
  state.ingredients = ingredients;
}

export function ADD_INGREDIENT(state, ingredient) {
  state.ingredients.push(ingredient);
}
