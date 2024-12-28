import { Route } from '@angular/router';

export const contentRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: ':pageSlug/:contentSlug',
        loadComponent: () =>
          import('./content-detail/content-detail.component').then((component) => component.ContentDetailComponent),
      },
    ],
  },
];
