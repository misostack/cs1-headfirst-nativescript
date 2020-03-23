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
import { environment } from "@environments/environment";
import { AppStates, STORE_DATA_TYPES } from "@base/models";
import { StoreDomain } from "../models/store.domains";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { AuthState, UserState, AppState } from "../models/states.interface";
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
      name: this.get<string>('version', environment.name),
      debug: this.get<boolean>('version', environment.debug),
      version: this.get<number>('version', environment.version),
      auth: this.get<object>('auth', {token: ''}),
      user: this.get<object>('user', null),
    }    
  }

  listen(domain: 'app' | 'auth' | 'user' = 'app'): Observable<AppState>{
    if(domain === 'auth'){
      return this._authStateChanges$.asObservable().pipe(delay(500));
    }
    if(domain === 'user'){
      return this._userStateChanges$.asObservable().pipe(delay(500));
    }
    return this._appStateChanges$.asObservable().pipe(delay(500));
  }

  get<STORE_DATA_TYPES>(key: StoreDomain, defaultValue: any = null){    
    return this._get<STORE_DATA_TYPES>(key , 'app', defaultValue);
  }

  private clear(){
    clear();
  }

  cleanLoggedInData() {
    this._remove('auth');
    this._remove('user');
    // stream new states
    this._appStateChanges$.next(this._getAppStates());
  }

  set<STORE_DATA_TYPES>(key: StoreDomain, value: any){
    this._set<STORE_DATA_TYPES>(key, 'app', value);
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

  private _get<STORE_DATA_TYPES>(key: StoreDomain, prefix : 'app' = 'app', defaultValue: any){
    const store_key = `${prefix + '_' + key}`;
    defaultValue = <STORE_DATA_TYPES>defaultValue;
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
      console.log(store_value)
      return JSON.parse(store_value);
    }else{
      return defaultValue;
    }    
  }

  private _set<STORE_DATA_TYPES>(key: StoreDomain, prefix : 'app' = 'app', value: any){
    const store_key = `${prefix + '_' + key}`; 
    let t = typeof(value);
    console.log('value', typeof(value), JSON.stringify(value))
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