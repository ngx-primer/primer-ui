import { AppBannerTextComponent } from './shared/components/commons/app-banner-text/app-banner-text.component';
import { AppContentSectionComponent } from './shared/components/commons/app-content-section/app-content-section.component';
import { AppFeatureButtonComponent } from './shared/components/commons/app-feature-button/app-feature-button.component';
import { AppFeatureCardComponent } from "./shared/components/commons/app-feature-card/app-feature-card.component";
import { AppFooterComponentComponent } from './shared/components/commons/app-footer-component/app-footer-component.component';
import { AppHeaderComponentComponent } from './shared/components/commons/app-header-component/app-header-component.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule, AppHeaderComponentComponent, AppFooterComponentComponent, AppFeatureButtonComponent, AppContentSectionComponent, AppBannerTextComponent, AppFeatureCardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
  ]
})
export class AppComponent {
  title = 'Ngx Primer | Angular Primtives Component Library';
  features = [
    {
      title: "Accessible",
      description: "All components follow the accessibility guidelines set out by the Primer Design System to ensure a better user experience."
    }, 
    {
      title: "Customizable",
      description: "Tailor the components' appearance and behavior using Angular's flexible input properties and directives."  
    }, 
    {
      title: "Responsive",
      description: "The library is designed to be responsive and work seamlessly across all device types and screen sizes."
    },
    {
      title: "Themeable",
      description: "Easily switch between light and dark modes, as well as apply custom themes to your components."
    },
    {
      title: "Signal API",
      description: "Leverage Angular's Signal API to create custom events and handle them in your application, for highly reactive, optimized performance.",
    }
  ];

  hyperlinks = [
    {
      text: "Get Started",
      hyperlink: true,
      target: "get-started",
    },
    {
      text: "Quick Start",
      hyperlink: true,
      target: "quick-start",
    },
    {
      text: "Api Reference",
      hyperlink: true,
      target: "api-reference",
    },
  ]
}
