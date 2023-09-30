import { ActionReducerMap } from "@ngrx/store";
import { UserReducer } from "./reducers/user.reducer";
import { AuthReducer, AuthState } from "./reducers/auth.reducer";
import { IUserState } from "./Istate/user.state";
import { CategoryReducer, CategoryState } from "./reducers/category.reducer";
import { AppReducer, AppState } from "./reducers/app.reducer";

export interface RootState {
  app: AppState,
  auth: AuthState,
  user: IUserState,
  category: CategoryState
}

export const ROOT_REDUCERS: ActionReducerMap<RootState> = {
  app: AppReducer,
  auth: AuthReducer,
  user: UserReducer,
  category: CategoryReducer
}
