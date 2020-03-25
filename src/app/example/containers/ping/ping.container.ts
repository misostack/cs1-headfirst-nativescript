import { Component, OnInit } from '@angular/core';
import { PingDTO } from '@app/base';
import { PingService } from '../../services/ping.service';
import { Observable } from 'rxjs';
import { APP_ROUTES } from '@app/base';


@Component({
  selector: 'ns-ping-container',
  templateUrl: './ping.container.html',
  styleUrls: ['./ping.container.scss']
})
export class PingContainer implements OnInit {
  APP_ROUTES = APP_ROUTES;
  ping$: Observable<PingDTO>;

  constructor(
    private pingService: PingService,
  ) {
    this.ping$ = this.pingService.ping()
  }

  ngOnInit(): void {
  }
  

}
