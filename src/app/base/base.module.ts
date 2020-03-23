import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LogService, StoreService, AuthService, ApiService, FirebaseService } from './services';
import { HttpClientModule } from '@angular/common/http';

const BASE_SERVICES = [
  LogService,
  StoreService,
  AuthService,
  ApiService,
  FirebaseService,
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
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BaseModule { }
