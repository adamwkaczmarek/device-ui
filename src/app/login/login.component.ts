import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/auth/authentication.service';
import {Router} from '@angular/router';
import {User} from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor( private router: Router,
               private authService: AuthenticationService) { }

  ngOnInit() {
      this.user = {
        id: '',
        password: ''
      };
  }

    public login() {
    this.authService
      .login(this.user.id, this.user.password)
      .subscribe(() => this.router.navigateByUrl('/dashboard'));
  }
}
