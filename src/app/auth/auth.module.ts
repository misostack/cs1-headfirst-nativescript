import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginContainer } from './containers/login/login.container';



@NgModule({
  declarations: [
    LoginContainer,
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule { }
