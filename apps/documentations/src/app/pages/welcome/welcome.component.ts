import { AppBannerTextComponent } from '../../shared/components/commons/app-banner-text/app-banner-text.component';
import { AppContentSectionComponent } from '../../shared/components/commons/app-content-section/app-content-section.component';
import { AppFeatureButtonComponent } from '../../shared/components/commons/app-feature-button/app-feature-button.component';
import { AppFeatureCardComponent } from '../../shared/components/commons/app-feature-card/app-feature-card.component';
import { AppFooterComponentComponent } from '../../shared/components/commons/app-footer-component/app-footer-component.component';
import { AppHeaderComponentComponent } from '../../shared/components/commons/app-header-component/app-header-component.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [
    AppHeaderComponentComponent,
    AppBannerTextComponent,
    AppFeatureButtonComponent,
    AppFeatureCardComponent,
    AppContentSectionComponent,
    AppFooterComponentComponent,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  title = 'Ngx Primer | Angular Primtives Component Library';
  features = [
    {
      title: 'Accessible',
      description:
        'All components follow the accessibility guidelines set out by the Primer Design System to ensure a better user experience.',
    },
    {
      title: 'Customizable',
      description:
        "Tailor the components' appearance and behavior using Angular's flexible input properties and directives.",
    },
    {
      title: 'Responsive',
      description:
        'The library is designed to be responsive and work seamlessly across all device types and screen sizes.',
    },
    {
      title: 'Themeable',
      description:
        'Easily switch between light and dark modes, as well as apply custom themes to your components.',
    },
    {
      title: 'Signal API',
      description:
        "Leverage Angular's Signal API to create custom events and handle them in your application, for highly reactive, optimized performance.",
    },
  ];

  hyperlinks = [
    {
      text: 'Get Started',
      hyperlink: true,
      target: '/docs/overview/introduction',
    },
    {
      text: 'Guides',
      hyperlink: true,
      target: '/docs/guides/installation',
    },
    {
      text: 'Api Reference',
      hyperlink: true,
      target: '/docs/api-reference/accordion',
    },
  ];
}
