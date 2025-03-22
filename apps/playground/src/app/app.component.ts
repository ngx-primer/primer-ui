import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  NgxPrimerAccordionContentComponent,
  NgxPrimerAccordionItemComponent,
  NgxPrimerAccordionRootComponent,
  NgxPrimerAccordionTriggerComponent,
  NgxPrimerCollapseExpandAnimationDirective,
  collapseExpandAnimation,
} from '@ngx-primer/accordion';
import {
  heroChevronDownMini,
  heroChevronUpMini,
} from '@ng-icons/heroicons/mini';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIcon,
    NgxPrimerAccordionRootComponent,
    NgxPrimerAccordionItemComponent,
    NgxPrimerAccordionTriggerComponent,
    NgxPrimerAccordionContentComponent,
    NgxPrimerCollapseExpandAnimationDirective,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [
    provideIcons({
      heroChevronDownMini,
      heroChevronUpMini,
    }),
  ],
  animations: [collapseExpandAnimation],
})
export class AppComponent {
  title = 'playground';
  accordionData = [
    {
      label: 'Introduction',
      value: 'intro',
      content:
        'Welcome to our platform! Here, you’ll learn about our purpose, the problem we solve, and how we aim to make your life easier.',
    },
    {
      label: 'Features',
      value: 'features',
      content:
        'Explore a range of features, including real-time collaboration, intuitive design tools, and seamless integrations with popular apps.',
    },
    {
      label: 'Usage Guidelines',
      value: 'usage',
      content:
        'Follow these simple guidelines to get the most out of our platform, from account setup to leveraging advanced functionalities.',
    },
    {
      label: 'FAQs',
      value: 'faqs',
      content:
        'Have questions? Check out our Frequently Asked Questions to find answers on account management, pricing, and troubleshooting. lorem kflkldskkklsklkdlksskdkldkskldklkdkl k sdlmlmlkfsdk k klmlk kkmeklm',
    },
    {
      label: 'Contact Us',
      value: 'contact',
      content:
        'Need help? Reach out to our support team via email, phone, or live chat. We’re here to assist you 24/7.',
    },
    {
      label: 'Other Ask',
      value: 'other-ask',
      content:
        'Need help? Reach out to our support team via email, phone, or live chat. We’re here to assist you 24/7.',
    },
  ] as const;

  accordionVal = this.accordionData[5].value;

  accordion2Data = [
    {
      label: 'About Our Company',
      value: 'about',
      content:
        'Learn about our journey, mission, and the core values that drive us to deliver exceptional products and services.',
    },
    {
      label: 'How It Works',
      value: 'how-it-works',
      content:
        'Understand the step-by-step process of how our platform functions, from signing up to achieving your goals.',
    },
    {
      label: 'Pricing Plans',
      value: 'pricing',
      content:
        'Discover our flexible pricing options designed to meet the needs of individuals, startups, and enterprises.',
    },
    {
      label: 'Customer Success Stories',
      value: 'success-stories',
      content:
        'Read inspiring stories of how our platform has helped customers achieve success in their projects and businesses.',
    },
    {
      label: 'Get Started',
      value: 'get-started',
      content:
        'Ready to begin? Follow our quick start guide to set up your account and start using our platform in minutes.',
    },
  ] as const;

  accordion2Val = this.accordion2Data[1].value;

  disabled = true;
}
