export type StoreDomain = 
'name' | 
'debug' | 
'version' | 
'auth' | 
'user';

export type StoreDataTypes = number | string | boolean | object;

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