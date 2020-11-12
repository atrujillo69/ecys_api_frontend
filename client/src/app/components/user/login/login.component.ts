import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  carnet: number;
  password: string;

  constructor() {}

  login() {
    console.log(this.carnet);
    console.log(this.password);
  }

}
