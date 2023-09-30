import {createReducer , on } from '@ngrx/store';
import { Category } from 'src/app/shared/models/category.model';
import { addCategory, deleteCategory, loadCategories, loadedCategories, loadedCategory } from '../actions/category.action';

export interface CategoryState {
  data: ReadonlyArray<Category>,
  category: Category
}

export const initialState: CategoryState = {
  data: [],
  category: {
    id: 0,
    name: '',
    image: '',
    creationAt: '',
    updatedAt: '',
  }
}

export const CategoryReducer = createReducer(
  initialState,
  on(loadCategories, (state) => {
    return { ...state}
  }),
  on(loadedCategories, (state, { categories }) => {
    return { ...state, data: categories};
  }),
  on(loadedCategory, (state, { category }) => {
    return { ...state, category: category};
  }),
  on(deleteCategory, (state) => {
    return { ...state};
  }),
);