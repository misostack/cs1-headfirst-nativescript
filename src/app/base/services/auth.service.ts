import { Injectable } from "@angular/core";
import { StoreService } from ".";
import { timer, of} from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { environment } from "~/environments/environment";


Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private store: StoreService,
  ){}

  logIn( {identity, password} ) {
    const obs = of({token: environment.mock.token})
    
    timer(500)
    .pipe(
      switchMap(num => obs)
    )
    .subscribe(res => {
      this.store.set('auth', {
        token: res.token
      })      
    })
    
  }

  logOut() {
    timer(500)    
    .subscribe(n => {
      this.store.cleanLoggedInData();
    })    
  }

  onLoginSuccess() {

  }

  onLoginFailed() {

  }
}