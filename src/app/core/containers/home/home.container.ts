import { Component, OnInit } from "@angular/core";
import { LogService } from "@base/services";

@Component({
    selector: "Home",
    templateUrl: "./home.container.html",
    styleUrls: ["./home.container.scss"]
})
export class HomeContainer implements OnInit {

    constructor(
        private log: LogService,
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
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
}
