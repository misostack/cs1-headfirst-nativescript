import { NgModule, NO_ERRORS_SCHEMA, ModuleWithProviders } from '@angular/core';
import {
  // services
  LogService,
  StoreService,
  AuthService,
  ApiService,
  FirebaseService,
  // guards
  AuthGuard,
  AuthStateGuard,
} from '.';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

const BASE_SERVICES = [
  LogService,
  StoreService,
  AuthService,
  ApiService,
  FirebaseService
]

const BASE_PROVIDERS = [
  AuthGuard,
  AuthStateGuard,
]

@NgModule({
  declarations: [],
  imports: [
    NativeScriptHttpClientModule,
  ],
  exports: [
    NativeScriptHttpClientModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BaseModule {
  static forRoot() : ModuleWithProviders {
    return {
      ngModule: BaseModule,
      providers: [
        ...BASE_SERVICES,
        ...BASE_PROVIDERS,
      ]
    }
  }
}
