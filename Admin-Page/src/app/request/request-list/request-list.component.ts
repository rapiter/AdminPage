import { Component, OnInit } from '@angular/core';
import {Request} from '../../models/request';
import {RequestService} from '../../services/request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: Request[];

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests(): void {
    this.requestService.getRequests()
      .subscribe(requests => this.requests = requests);
  }
}
