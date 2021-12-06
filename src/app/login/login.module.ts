import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeSidebarComponent } from './home/home-sidebar/home-sidebar.component';
import { HomeClassComponent } from './home/home-class/home-class.component';


@NgModule({
  declarations: [HomeComponent, HomeSidebarComponent, HomeClassComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
