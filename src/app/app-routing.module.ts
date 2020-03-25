import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthGuard, AuthStateGuard } from "@app/base";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { 
        path: "home",
        loadChildren: () => import("~/app/core/core.module").then((m) => m.HomeModule),
        canActivate: [AuthGuard],
    },
    { 
        path: "auth",
        loadChildren: () => import("~/app/auth/auth.module").then((m) => m.AuthModule),
        canActivate: [AuthStateGuard],
    },
    { path: "example", loadChildren: () => import("~/app/example/example.module").then((m) => m.ExampleModule) },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
