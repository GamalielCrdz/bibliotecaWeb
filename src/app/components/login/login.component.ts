import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  logIn() {
    const body: string = 'email=' + this.email + '&contrasena=' + this.password;
    const formdata: FormData = new FormData();
    formdata.append('email', this.email);
    formdata.append('contrasena', this.password);
    this.userService.logIn(formdata).subscribe(response => {
      console.log(response, 'login response');
    });

  }

}
