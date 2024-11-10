import { Component } from '@angular/core';
import { NgxPrimerAccordionRootComponent } from '@ngx-primer-accordion';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, NgxPrimerAccordionRootComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngx-primer-documentation';
}
