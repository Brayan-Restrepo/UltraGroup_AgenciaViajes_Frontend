import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent implements OnInit {

  public admin: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.admin = this.loginService.buscarSesionLocal()? true: false;
  }

  public onLogin() {
    this.router.navigate(['login']);
  }

  public onSalir() {
    this.loginService.destroySesionLocal();
  }

}
