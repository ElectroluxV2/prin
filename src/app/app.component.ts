import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  icon = 'menu';

  constructor(private router: Router) {

    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(e => {
      console.log(router.url.includes('thread'))
      this.icon = router.url.includes('thread') ? 'arrow_back' : 'menu';
    });

    router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(e => {
      this.sidenav.close().then();
    });
  }

  navigate() {
    if (this.router.url.includes('thread')) this.router.navigate(['/friends']).then();
    else this.sidenav.toggle().then();
  }
}
