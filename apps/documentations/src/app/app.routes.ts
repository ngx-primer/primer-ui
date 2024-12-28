import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./pages/welcome/welcome.component').then(
        (c) => c.WelcomeComponent,
      ),
    data: {
      sideMenu: {
        title: 'Welcome',
      },
    },
  },
  {
    path: 'docs',
    loadComponent: () => import('./content/content.component').then((c) => c.ContentComponent),
    loadChildren: () => import('./content/content.route').then((r) => r.contentRoutes),
  },
];
