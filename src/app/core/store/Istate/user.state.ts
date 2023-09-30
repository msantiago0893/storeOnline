import { UserModel } from "../../../shared/models/user.model";

export interface IUserState {
  loading: boolean,
  items: ReadonlyArray<UserModel>
}