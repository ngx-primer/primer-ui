import {
  NgxPrimerAccordionItemComponent,
  NgxPrimerAccordionRootComponent
} from '@ngx-primer/accordion';

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, NgxPrimerAccordionRootComponent, NgxPrimerAccordionItemComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
