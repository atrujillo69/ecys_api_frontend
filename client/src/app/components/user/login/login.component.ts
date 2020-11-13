import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface} from 'src/app/models/user-interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(private authService: AuthService, private router: Router) {}
  user: UserInterface = {

  carnet: "",
  nombres:"",
  apellidos:"",
  password: "",
  correo:""
  };
  ngOnInit(){}
  onLogin(){
    return this.authService.loginUser(this.user.carnet, this.user.password).subscribe(data => {
      this.authService.setUser(data.user);
      this.router.navigate(["/home"]);
    
    },
    error => console.log(error));
  }
}
