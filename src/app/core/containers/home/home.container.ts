import { Component, OnInit } from "@angular/core";
import { LogService, StoreService, AuthService } from "@base/services";
import { AppStates } from "@base/models";
import { Observable } from "rxjs";
import { localize } from "nativescript-localize";

@Component({
    selector: "Home",
    templateUrl: "./home.container.html",
    styleUrls: ["./home.container.scss"]
})
export class HomeContainer implements OnInit {

    appName: string;
    appStates$: Observable<AppStates>
    appStates: AppStates;    

    constructor(
        private log: LogService,
        private store: StoreService,
        private auth: AuthService,
    ) {
        // Use the component constructor to inject providers.        
        this.store.listen('app').subscribe((states: AppStates) => {
            this.appStates = states;
        }, error => this.log.error(error))
    }

    ngOnInit(): void {
        this.appName = localize('app.name')
        // Init your component properties here.
        this.log.debug('EXAMPLE HOME')
    }

    raiseError() {
        try {
            throw new Error('EXAMPLE ERROR');
        } catch (error) {
            this.log.error(error)    
        }
    }

    onLogin() {
        this.auth.logIn({identity: 'aa', password: '123'})
    }

    onLogout() {
        this.auth.logOut();
    }    
}
