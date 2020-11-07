import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from "src/app/models/user-interface";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }
  private user: UserInterface = {
    Ra: '',
    name: '',
    lastname:'',
    email: '',
    password: ''
  };

  ngOnInit(): void {
  }
  onRegister(): void {
    this.authService
      .registerUser(this.user.Ra,this.user.name, this.user.lastname, this.user.email, this.user.password)
      .subscribe(user => {
        this.authService.setUser(user);
          const token = user.id;
          this.authService.setToken(token)
          //this.router.navigate(['/user/profile']);
      }
    );
  }

}
