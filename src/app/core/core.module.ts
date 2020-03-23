import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
// always impor BaseModule
import { SharedModule } from "@shared/shared.module";

import { CoreRoutingModule } from "./core-routing.module";
import { HomeContainer } from "./containers";

const CORE_COMPONENTS = [];

const CORE_CONTAINERS = [
    HomeContainer,
];

@NgModule({
    imports: [
        SharedModule,
        CoreRoutingModule,
    ],
    declarations: [
        CORE_COMPONENTS,
        CORE_CONTAINERS,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
