import { Routes } from '@angular/router';
//
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: 'about', component: AboutComponent, title: 'About'},
  {path: 'home', component: HomeComponent, title:'Home'},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
