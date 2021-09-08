import { UserType } from "../../userTypes/userType";

type ActionTypes = "CREATE_USER" | "LOGIN_USER" | "LOGOUT_USER";

export interface Action {
  type: ActionTypes;
}

export interface CreateUserAction extends Action {
  type: "CREATE_USER",
  payload: UserType, // будет все включать
}

export interface LoginUserAction extends Action {
  type: "LOGIN_USER",
  payload: UserType
}

export interface LogoutUserAction extends Action {
  type: "LOGOUT_USER",
  payload: {
    id: UserType['id'],
  }
}

export type Actions = CreateUserAction | LoginUserAction | LogoutUserAction;