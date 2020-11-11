import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import {UserInterface} from "src/app/models/user-interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }
  private user: UserInterface = {
    carnet: 0,
    nombres: '',
    apellidos: '',
    contraseña: '',
    email: ''
  };
  public isError = false;
  public msgError = '';

  ngOnInit(): void {
  }
  onRegister(): void{
    this.authService.registerUser(this.user.carnet,this.user.nombres, this.user.apellidos, this.user.contraseña, this.user.email)
    .subscribe(user =>{
      console.log(user);
    });
  }

}
