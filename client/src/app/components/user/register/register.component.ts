import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { UserInterface } from "src/app/models/user-interface";
import { AuthService } from "../../../services/auth.service";



@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  user: UserInterface = {
  carnet: 0,
  nombres: "",
  apellidos: "",
  password: "",
  email: ""

  }

  constructor(private registroUsuario: AuthService, private router : Router) {}
  ngOnInit() {}

  register() {
    this.registroUsuario.registerUser(this.user).subscribe(
      res => {
        console.log(res)
        this.router.navigate(["/login"]);
      }
    )
  }

  
}