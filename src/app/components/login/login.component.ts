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
  passwordConfirmation: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  logIn() {
    const formdata: FormData = new FormData();
    formdata.append('email', this.email);
    formdata.append('contrasena', this.password);
    this.userService.logIn(formdata).subscribe(response => {
      const apiResponse: any = response;
      if (apiResponse.resultado) {
        alert('Logged Usuario: ' + apiResponse.user.nombre);
      } else {
        alert('user dont exist');
      }
    });
  }

  register() {
    const formdata: FormData = new FormData();
    formdata.append('nombre', this.email);
    formdata.append('email', this.email);
    formdata.append('contrasena', this.password);
    this.userService.createUser(formdata).subscribe(response => {
      const apiResponse: any = response;
      if (apiResponse.resultado) {
        alert('Logged Usuario: ' + apiResponse.user.nombre);
      } else {
        alert('user dont exist');
      }
    });

  }

}
