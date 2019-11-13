import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  constructor(
    private _loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {    
    this.formLogin = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  public onLogin() {
    if(this.formLogin.valid) {
      this._loginService.loginUser(this.formLogin.value).subscribe((response) => {
          this.router.navigate(['gestion']);
        }, (error) => {
          Swal.fire({ icon: 'error', title: 'Oops...', text: 'Usuario o Password invalidos' });
        }
      )
    } else {      
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Ingrese datos validos' });
    }
  }

}