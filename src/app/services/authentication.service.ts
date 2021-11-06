import { Injectable } from '@angular/core';

/* importar librerias */
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(true);

  constructor(
  ) { 
  }

}
