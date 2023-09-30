import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CategoryState } from "../reducers/category.reducer";

// Selector para obtener el estado de las categorías
export const selectCategoryState = createFeatureSelector<CategoryState>('category');

// Selector para obtener la lista de categorías
export const selectCategories = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.data
);

export const selectCategory = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.category
);
