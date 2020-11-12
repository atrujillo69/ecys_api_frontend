import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { UserInterface } from "src/app/models/user-interface";
import { AuthService } from "../../../services/auth.service";



@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  

  constructor(private authService: AuthService) {}
    user: UserInterface = {
    carnet: "",
    nombres: "",
    apellidos: "",
    password: "",
    correo: ""
  
    };
    ngOnInit(): void {
    
    }
    onRegister(): void{
      this.authService.registerUser(this.user.carnet,this.user.nombres, this.user.apellidos, this.user.password, this.user.correo)
      .subscribe(user =>{
        console.log(user);
        //this.authService.setUser(user);
        //let token= user.carnet;
        //this.authService.setToken(token)
      });
    }
  }
  
    
