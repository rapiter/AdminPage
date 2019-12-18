import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RequestService} from '../../services/request.service';
import {Router} from '@angular/router';
import {Request} from '../../models/request';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-request-add',
  templateUrl: './request-add.component.html',
  styleUrls: ['./request-add.component.css']
})
export class RequestAddComponent implements OnInit {
  requestForm = new FormGroup({
    userId: new FormControl(''),
    requestHeader: new FormControl(''),
    requestBody: new FormControl(''),
  });
  request: Request;

  constructor(private requestService: RequestService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  add() {
    const requestFromFields = this.requestForm.value;
    const request = {
      userId: this.authService.getUserId(),
      requestHeader: requestFromFields.requestHeader,
      requestBody: requestFromFields.requestBody
    };
    this.requestService.addRequest(request as unknown as Request)
      .subscribe(() => {
        this.router.navigateByUrl('/main');
      });
  }
}
