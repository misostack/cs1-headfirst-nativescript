
import { CanActivate, Router } from "@angular/router";
import { StoreService, LogService } from "@base/services";
import {
  AuthState,
  AppState,
  APP_ROUTES,
} from "@base/index";
import { Observable } from "rxjs";

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
      
    })    
  }
}
