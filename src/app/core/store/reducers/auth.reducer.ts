import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess } from "../actions/auth.action";

// Define una interfaz para el estado de autenticación
export interface AuthState {
  token: string,

  loginData?: any | null;
  isLoading?: boolean
  isError?: string | null;
}

export const initialState: AuthState = {
  token: '',
  loginData: null,
  isLoading: false,
  isError: null
};

export const AuthReducer = createReducer(
  initialState,
  on(login, (state, { credentials }) => ({
    ...state,
    user: credentials,
    isLoading: true,
    isError: null
  })),
  on(loginSuccess, (state) => ({
    ...state,
    isLoading: false
  })),
  on(loginFailure, (state, { message }) => ({
    ...state,
    user: null,
    isLoading: false,
    isError: message
  }))
);
