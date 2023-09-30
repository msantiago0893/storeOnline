import { ActionReducerMap } from "@ngrx/store";
import { AuthReducer, AuthState } from "./reducers/auth.reducer";
import { CategoryReducer, CategoryState } from "./reducers/category.reducer";
import { AppReducer, AppState } from "./reducers/app.reducer";
import { UserReducer, UserState } from "./reducers/user.reducer";

export interface RootState {
  app: AppState,
  auth: AuthState,
  user: UserState,
  category: CategoryState
}

export const ROOT_REDUCERS: ActionReducerMap<RootState> = {
  app: AppReducer,
  auth: AuthReducer,
  user: UserReducer,
  category: CategoryReducer
}
