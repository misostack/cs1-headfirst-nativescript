import { AuthState } from './auth.state';
import { UserState } from './user.state';

interface AppStates {
  auth: AuthState,
  user: UserState,  
}

type AppState = AppStates | AuthState | UserState;

export {
  AppStates,
  AppState,
  AuthState,
  UserState,
}