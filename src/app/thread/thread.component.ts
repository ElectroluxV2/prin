import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from '../users.service';
import { SimpleLightbox } from '../simple-lightbox.js';


@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private service: UsersService) {
    this.user = service.users[route.snapshot.params['id'] - 1];
    console.log(this.user);
  }

  ngOnInit(): void {
  }

  htmlToElement(html: string) {
    const template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild as ChildNode;
  }

  open(attachment: string) {
    const a = this.htmlToElement(`<a class="gallery" href="${attachment}" style="display: none"><img src="${attachment}"/></a>`) as HTMLLinkElement;
    const b = this.htmlToElement(`<img src="${attachment}"/>`);
    const ref = new SimpleLightbox('noop', {});
    ref.open(a);
    console.log(ref)
    // console.log(b)
    // ref.open();
    // a.click();
  }
}
