import { Component, OnInit } from '@angular/core';


import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-tab-alumn',
  templateUrl: './tab-alumn.page.html',
  styleUrls: ['./tab-alumn.page.scss'],
})
export class TabAlumnPage implements OnInit {

  constructor(
    private authentServ: AuthenticationService
  ) { }

  ngOnInit() {
  }
  logoutUser(){
    this.authentServ.logout();
  }
}
