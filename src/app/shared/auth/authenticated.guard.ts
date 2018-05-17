import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // if (this.authService.isAuthenticated()) {
    //   return true;
    // }
    // this.router.navigate(['login']);
    // return false;

    return this.authService.isAuthorized().map(isAuthorized => isAuthorized);
  }
}
