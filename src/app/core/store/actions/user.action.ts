import { createAction, props } from "@ngrx/store";
import { UserModel } from "../../../shared/models/user.model";

export const loadUsers = createAction(
  '[User list] Load items', // Todo: Representa una accion
);

export const loadedUsers = createAction(
  '[User list] Loaded success', // Todo: Representa una accion
  props<{ users: UserModel }>()
);
