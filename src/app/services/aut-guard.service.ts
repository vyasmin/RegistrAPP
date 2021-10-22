import { Injectable } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AutGuardService {

  constructor(
    public authenticationService: AuthenticationService
  ) { }

  canActivate():Boolean{
    console.log('Estado: '+this.authenticationService.isAuthenticated());
    return this.authenticationService.isAuthenticated();
  }
}
