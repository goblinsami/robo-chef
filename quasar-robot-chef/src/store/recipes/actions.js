export function action_setRecipes({ commit }, data) {
  commit("SET_RECIPES", data);
}

export function action_setRecipes2({ commit }, data) {
  commit("SET_RECIPES_2", data);
}

export function action_setIngredients({ commit }, data) {
  commit("SET_INGREDIENTS", data);
}

export function action_addIngredient({ commit }, data) {
  commit("ADD_INGREDIENT", data);
}
