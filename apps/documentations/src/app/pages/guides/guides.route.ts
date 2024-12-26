import { Route } from '@angular/router';

export const guidesRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'introduction',
        pathMatch: 'full',
      },
      {
        path: ':slug',
        loadComponent: () =>
          import('./guide-detail/guide-detail.component').then(
            (c) => c.GuideDetailComponent,
          ),
      },
    ],
  },
];
