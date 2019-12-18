import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  isAdmin(): boolean {
    return this.authService.getAdmin() === 0;
  }

  isLoggedIn(): boolean {
    return !!this.authService.getToken();
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
