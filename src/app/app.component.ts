import { Component, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(e => {
      this.sidenav.close().then();
    })
  }

}
