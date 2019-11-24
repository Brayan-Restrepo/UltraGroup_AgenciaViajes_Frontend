import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './filtro/filtro.component';
import { HederComponent } from './heder/heder.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../services/login/login.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FiltroComponent,
    HederComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    FiltroComponent,
    HederComponent
  ]
})
export class SharedModule { }
