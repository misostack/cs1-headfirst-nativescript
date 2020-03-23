import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ExampleRoutingModule } from './example-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';


@NgModule({
  declarations: [],
  imports: [
    ExampleRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ExampleModule { }
