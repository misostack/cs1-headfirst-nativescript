import { Component, OnInit } from '@angular/core';
import { AuthService } from '~/app/base/services';

@Component({
  selector: 'ns-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
export class LoginContainer implements OnInit {

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.auth.logIn({identity: "radon", password: "123"})
  }

}
