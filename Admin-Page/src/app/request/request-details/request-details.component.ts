import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {FormControl, FormGroup} from '@angular/forms';
import {RequestService} from '../../services/request.service';
import {Request} from '../../models/request';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  requestForm = new FormGroup({
    requestHeader: new FormControl(''),
    requestBody: new FormControl(''),
  });

  request: Request;
  private id: number;

  constructor(private route: ActivatedRoute,
              private requestService: RequestService,
              private router: Router, private authService: AuthenticationService) {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.requestService.getRequest(this.id)
      .subscribe(requestFromRest => {
        this.requestForm.patchValue({
          requestHeader: requestFromRest.requestHeader,
          requestBody: requestFromRest.requestBody
        });
      });
  }

  ngOnInit() {
    this.getRequest();
  }

  getRequest(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.requestService.getRequest(id)
      .subscribe(request => this.request = request);
  }

  delete() {
    this.requestService.deleteRequest(this.request).subscribe(
      () => {
        this.router.navigate(['/requests']);
      });
  }


  isAdmin(): boolean {
    if (this.authService.getAdmin() === 0) {
      return true;
    } else { return false; }
  }

}
