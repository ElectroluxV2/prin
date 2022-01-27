import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  user = {};

  constructor(private route: ActivatedRoute, private service: UsersService) {
    this.user = service.users[route.snapshot.params['id']];
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}
