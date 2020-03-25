import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
// always import Shared
import { SharedModule } from "@shared/shared.module";
// next import RoutingModule
import { ExampleRoutingModule } from './example-routing.module';
// next import providers : services, pipes, ...
import {
  PingService
} from './services';
// next import containers, components
import { 
  PingContainer 
} from './containers';

import { 
  PingComponent 
} from "./components";

const EXAMPLE_PROVIDERS = [
  PingService,
]
const EXAMPLE_CONTAINERS = [
  PingContainer,
]

const EXAMPLE_COMPONENTS = [
  PingComponent,
]

@NgModule({
  declarations: [
    ...EXAMPLE_CONTAINERS,
    ...EXAMPLE_COMPONENTS,    
  ],
  imports: [
    ExampleRoutingModule,
    SharedModule,
  ],
  providers: [
    ...EXAMPLE_PROVIDERS,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ExampleModule { }
