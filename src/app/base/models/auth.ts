import { CanActivate, Router, ROUTES } from "@angular/router";
import { StoreService, LogService } from "../services";
import { APP_ROUTES } from "./routes";
import { Observable } from "rxjs";
import { AuthState, AppState } from ".";


export class AuthGuard implements CanActivate {
  private authState$ : Observable<AppState>;
  constructor(
    private router: Router,
    private store: StoreService,
    private log: LogService,
  ) {
    this.authState$ = this.store.listen('auth');
  }

  canActivate() : Observable<boolean>|Promise<boolean>|boolean {
    return new Observable(obs => {      
      // check state
      this.authState$.subscribe((state: AuthState) => {
      if(state && state.token && state.token.length > 0){
        obs.next(true)
      }
      else{
        obs.next(false)
        this.router.navigate([APP_ROUTES.AUTH_LOGIN])
      }
    }, error => {
      obs.next(false);
      this.log.error(error)
    })
      // if(auth && auth.token  && auth.token.length > 0){
      //   obs.next(true)
      // }
      // else {
      //   obs.next(false)
      //   this.router.navigate([APP_ROUTES.AUTH_LOGIN])
      // }      
      
    })    
  }
}


export class AuthStateGuard implements CanActivate {
  private authState$ : Observable<AppState>;
  constructor(
    private router: Router,
    private store: StoreService,
    private log: LogService,
  ) {
    this.authState$ = this.store.listen('auth');
  }

  canActivate() : Observable<boolean>|Promise<boolean>|boolean {
    return new Observable(obs => {      
      // check state
      this.authState$.subscribe((state: AuthState) => {
        if(state && state.token && state.token.length > 0){
          this.router.navigate([APP_ROUTES.HOME_INDEX])
          obs.next(false)
        }
        else{
          obs.next(true)          
        }
      }, error => {
        obs.next(true);
        this.log.error(error)
      })         
    })    
  }
}

