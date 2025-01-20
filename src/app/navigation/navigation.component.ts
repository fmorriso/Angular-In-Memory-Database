import {Component, OnInit} from '@angular/core';
import {CustomLink} from './custom-link';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {NgForOf} from '@angular/common';
import {MatAnchor} from '@angular/material/button';


@Component({
  standalone: true,
  selector: 'app-navigation',
  imports: [
    MatToolbar,
    MatToolbarRow,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    MatAnchor
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  links: CustomLink[] = [];
  pageTitle = 'ACME Product Management';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // build the navigation links using the Angular route config that was defined in app-routing.module.ts
    // and dependency-injected into this component, which effectively shares that route information without
    // having to define a separate Angular service component.
    // console.log(JSON.stringify(this.router.config));
    for (const route of this.router.config) {
      // we only care about paths that have a title attribute since the others are not going to be rendered in our navigation bar
      if (route.title) {
        const link: CustomLink = {
          title: `${route.title}`,
          path: `/${route.path}`
        };
        this.links.push(link);
      }
    }
  }
}
