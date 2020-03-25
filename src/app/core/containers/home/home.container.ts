import { Component, OnInit } from "@angular/core";
import { LogService, AuthService } from "@base/index";
import { t } from "@shared/pipes/translate.pipe";

@Component({
    selector: "Home",
    templateUrl: "./home.container.html",
    styleUrls: ["./home.container.scss"]
})
export class HomeContainer implements OnInit {

    appName: string;

    constructor(
        private log: LogService,
        private auth: AuthService,
    ) {

    }

    ngOnInit(): void {
        this.appName = t('APP_NAME')
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

    onLogout() {
        this.auth.logOut();
    }    
}
