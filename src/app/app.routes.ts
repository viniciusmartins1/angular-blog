import { Feed } from './feed/feed';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'feed',
    component: Feed,
  },
];
