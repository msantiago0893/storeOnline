import {createReducer , on } from '@ngrx/store';
import { loadUsers } from '../actions/user.action';
import { IUserState } from '../Istate/user.state';

//TODO: ESTADO INICIAL
export const initialState: IUserState = { loading: false, items: [] }

export const UserReducer = createReducer(
  initialState,
  on(loadUsers, (state) => {  //TODO: on: Sirve para escuchar las acciones
    console.log('Se ejecuto la accion loadUser ', state);
    return { ...state, loading: true }
  })
);