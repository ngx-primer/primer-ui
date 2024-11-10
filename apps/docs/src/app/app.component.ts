import { Component } from '@angular/core';
import { NgxPrimerAccordionItemComponent } from '@ngx-primer/accordion/accordion-item';
import { NgxPrimerAccordionRootComponent } from '@ngx-primer/accordion/accordion-root';
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
