import { Injectable } from "@angular/core";
import {
  getBoolean,
  setBoolean,
  getNumber,
  setNumber,
  getString,
  setString,
  hasKey,
  remove,
  clear
} from "tns-core-modules/application-settings";

import {
  AppStates,
  AuthState, 
  UserState,
  StoreDataTypes,
  StoreDomain,
  AppState,  
} from "@base/index";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { delay } from "rxjs/operators";

Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  private _appStateChanges$ : Subject<AppStates> = new BehaviorSubject(this._getAppStates())
  private _authStateChanges$ : Subject<AuthState> = new BehaviorSubject(this._getAppStates().auth);
  private _userStateChanges$ : Subject<UserState> = new BehaviorSubject(this._getAppStates().user);

  constructor(
    
  ) {
    // init AppState
    let states = this._getAppStates();
    this._appStateChanges$.next(states);
  }

  _getAppStates() : AppStates{
    return {
      auth: this.get<object>('auth', {token: ''}),
      user: this.get<object>('user', null),
    }    
  }

  listen(domain: StoreDomain): Observable<AppState>{
    
    if(domain === 'auth'){
      return this._authStateChanges$.asObservable().pipe(delay(500));
    }
    if(domain === 'user'){
      return this._userStateChanges$.asObservable().pipe(delay(500));
    }
    return this._appStateChanges$.asObservable().pipe(delay(500));
  }

  get<StoreDataTypes>(key: StoreDomain, defaultValue: any = null){    
    return this._get<StoreDataTypes>(key , 'app', defaultValue);
  }

  private clear(){
    clear();
  }

  cleanLoggedInData() {
    this._remove('auth');
    this._remove('user');
    // stream appstates
    const appStates = this._getAppStates()
    this._appStateChanges$.next(appStates);
    // stream user state
    this._authStateChanges$.next(appStates.auth);
    // stream auth state
    this._userStateChanges$.next(appStates.user);
  }

  set<StoreDataTypes>(key: StoreDomain, value: any){
    this._set<StoreDataTypes>(key, 'app', value);
    // stream the appstates
    this._appStateChanges$.next(this._getAppStates());
    // stream auth state
    if(key === 'auth'){
      this._authStateChanges$.next(value);
      return;
    }
    // stream user state
    if(key === 'user'){
      this._userStateChanges$.next(value);
      return;
    }
  }

  private _remove(key: StoreDomain, prefix : 'app' = 'app'){
    const store_key = `${prefix + '_' + key}`;
    remove(store_key);
  }

  private _get<StoreDataTypes>(key: StoreDomain, prefix : 'app' = 'app', defaultValue: any){
    const store_key = `${prefix + '_' + key}`;
    defaultValue = <StoreDataTypes>defaultValue;
    let t = typeof(defaultValue)

    if(t === 'string'){
      return getString(store_key, defaultValue);
    }
    if(t === 'boolean'){
      return getBoolean(store_key, defaultValue);
    }
    if(t === 'number'){
      return getNumber(store_key, defaultValue);
    }
    // default
    const store_value = getString(store_key, '');
    if(store_value.length > 0){
      return JSON.parse(store_value);
    }else{
      return defaultValue;
    }    
  }

  private _set<StoreDataTypes>(key: StoreDomain, prefix : 'app' = 'app', value: any){
    const store_key = `${prefix + '_' + key}`; 
    let t = typeof(value);
    if(t === 'string'){
      setString(store_key, value);
      return;
    }
    if(t === 'boolean'){
      setBoolean(store_key, value);
      return;
    }
    if(t === 'number'){
      setNumber(store_key, value);
      return;
    }
    if(t === 'object'){      
      setString(store_key, JSON.stringify(value))
      return;
    }
  }
}