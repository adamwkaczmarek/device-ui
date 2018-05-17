import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Device} from './device';
import {AuthenticationService} from '../shared/auth/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {

  private devicesUrl = 'api/device-reg/v1/devices';

  constructor(private http: HttpClient,
              private authService: AuthenticationService) { }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.devicesUrl, {headers: this.authService.getAuthorizationHeaders()});
  }

}
