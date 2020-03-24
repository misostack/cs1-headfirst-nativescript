import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    TranslatePipe,
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptLocalizeModule,
  ],
  exports: [
    NativeScriptCommonModule,
    NativeScriptLocalizeModule,    
    TranslatePipe,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
