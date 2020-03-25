import { Component, OnInit } from '@angular/core';
import { APP_ROUTES, AuthService } from '@app/base';

@Component({
  selector: 'ns-login-container',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
export class LoginContainer implements OnInit {

  APP_ROUTES = APP_ROUTES;
  example;

  constructor(
    private auth: AuthService,
  ) { 
    this.example = {color : 'red'};
  }

  ngOnInit(): void {
    this.example.color = 'green';
  }

  doLogin() {
    this.auth.logIn({identity: "radon", password: "123"})
  }

}
