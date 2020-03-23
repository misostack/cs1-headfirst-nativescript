import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LogService, StoreService, AuthService, ApiService, FirebaseService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard, AuthStateGuard } from './models';

const BASE_SERVICES = [
  LogService,
  StoreService,
  AuthService,
  ApiService,
  FirebaseService,
]

const BASE_PROVIDERS = [
  AuthGuard,
  AuthStateGuard,
]

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  exports: [
    
  ],
  providers: [
    ...BASE_SERVICES,
    ...BASE_PROVIDERS,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BaseModule { }
