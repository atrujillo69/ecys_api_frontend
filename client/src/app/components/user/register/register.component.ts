import { Component } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  carnet: number;
  name: string;
  lastName: string;
  email: string;
  password: string;

  constructor() {}

  register() {
    console.log(this.carnet);
    console.log(this.name);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.password);
  }
}