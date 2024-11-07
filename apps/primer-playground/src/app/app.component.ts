import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPrimerAccordionRootComponent } from '@ngx-primer-accordion';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NgxPrimerAccordionRootComponent, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'primer-playground';

  accordionItemMenus = [
    {
      title: "Hallo",
      description: "Test description",
      isOpen: true,
    },
    {
      title: "Hallo",
      description: "Test description",
      isOpen: true,
    },
    {
      title: "Hallo",
      description: "Test description",
      isOpen: true,
    },
    {
      title: "Hallo",
      description: "Test description",
      isOpen: true,
    },
    {
      title: "Hallo",
      description: "Test description",
      isOpen: true,
    },
    {
      title: "Hallo",
      description: "Test description",
      isOpen: true,
    },
    {
      title: "Hallo",
      description: "Test description",
      isOpen: true,
    },
    {
      title: "Hallo",
      description: "Test description",
      isOpen: true,
    },
    {
      title: "Hallo",
      description: "Test description",
      isOpen: true,
    }
  ].map((e, index) => ({
    ...e,
    title: e.title + ' ' + index,
    description: e.description + ' ' + index
  }))
}
