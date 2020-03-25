import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { 
  PingContainer 
} from './containers';


const routes: Routes = [
  {
    path: "", component: PingContainer, pathMatch: "full",
  },
  {
    path: "ping", component: PingContainer, pathMatch: "full",
  }    
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ExampleRoutingModule { }
