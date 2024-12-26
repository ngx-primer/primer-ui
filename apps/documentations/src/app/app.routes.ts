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
    path: 'guides',
    loadComponent: () =>
      import('./pages/guides/guides.component').then((c) => c.GuidesComponent),
    loadChildren: () =>
      import('./pages/guides/guides.route').then((r) => r.guidesRoutes),
    data: {
      sideMenu: {
        title: 'Guides',
      },
    },
  },
];
