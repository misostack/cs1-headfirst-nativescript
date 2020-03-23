export interface AuthState {
  token: string;  
}

export interface UserState {
  id: string;
  firstName: string;
  lastName: string;
}

export interface AppStates {
  name: string;
  debug: boolean;
  version: number;
  auth: AuthState;
  user: UserState;
}

export type AppState = AuthState | UserState | AppStates;