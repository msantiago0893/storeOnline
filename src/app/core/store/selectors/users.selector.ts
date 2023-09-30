import { IUserState } from "../Istate/user.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

//TODO: Es el selector que tiene relacion con la propiedad "items"
// export const selectUserFeature = (state: AppState) => state.items;

export const selectItems = createFeatureSelector<ReadonlyArray<IUserState>>('items');

// export const selectListItems = createSelector(
//   selectUserFeature,
//   (state: IUserState) => state.items
// );

// export const selectLoading = createSelector(
//   selectUserFeature,
//   (state: IUserState) => state.loading
// );
