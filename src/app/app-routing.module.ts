import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DevicesComponent} from './devices/devices.component';
import {AuthenticatedGuard} from './shared/auth/authenticated.guard';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DevicesComponent, canActivate: [AuthenticatedGuard]}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
