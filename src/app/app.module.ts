import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BaseModule } from "./base/base.module";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        BaseModule,
        NativeScriptModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
