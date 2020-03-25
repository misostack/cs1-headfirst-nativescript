import { Component, OnInit, Input } from '@angular/core';
import { PingDTO } from '@app/base';

@Component({
  selector: 'ns-ping-component',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.scss']
})
export class PingComponent implements OnInit {

  @Input('ping') ping: PingDTO;

  constructor() { }

  ngOnInit(): void {

  }

}
