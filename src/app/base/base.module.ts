import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LogService, StoreService, AuthService } from './services';
import { HttpClientModule } from '@angular/common/http';

const BASE_SERVICES = [
  LogService,
]

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  exports: [
    
  ],
  providers: [
    LogService,
    StoreService,
    AuthService,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BaseModule { }
