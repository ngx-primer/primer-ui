# ngx-primer

`ngx-primer` is an Angular-based implementation of the [Primer Design System](https://primer.style/), which is the design system used by GitHub. The project aims to bring the clean, accessible, and customizable components from Primer to the Angular ecosystem, providing developers with a powerful set of tools for building modern and user-friendly interfaces.

This library builds on existing implementations of Primer, such as the React and other versions, but focuses on leveraging the latest updates in Angular to create a robust and scalable solution.

## Inspiration

This project is inspired by the [Primer Design System](https://primer.style/) and aims to bring its flexible, accessible, and reusable components to Angular applications. Primer was originally developed by GitHub to standardize the design language and improve user experience across their products. It is now an open-source project, and its components have been implemented in various frameworks, including React, Vue, and now Angular.

While the design system is available for multiple frameworks, this Angular implementation takes advantage of the latest features in Angular, ensuring high performance and reactivity, especially with Angular's new signal-based API and other modern updates. With Angular being increasingly powerful, it was the ideal choice for this implementation.

## Features

- **Accessible Components**: All components follow the accessibility guidelines set out by the Primer Design System to ensure a better user experience.
- **Customizable**: Tailor the components' appearance and behavior using Angular's flexible input properties and directives.
- **Responsive**: The library is designed to be responsive and work seamlessly across all device types and screen sizes.
- **Built-in ID Generator**: Automatically generates unique IDs for components, ensuring they work well in dynamic contexts.
- **Themes Support**: Easily switch between light and dark modes, as well as apply custom themes to your components.
- **Angular Signal API**: Leverage the latest Angular features, such as signals, for highly reactive, optimized performance.

## Installation

To install `ngx-primer` into your Angular project, run the following command:

```bash
npm install ngx-primer
```

## Usage

To use the components in your Angular application, import the necessary modules and include the components in your templates.

1. Import `NgxPrimerAccordionModule` (or any other component module) into your Angular module:

```typescript
import { NgxPrimerAccordionModule } from 'ngx-primer';

@NgModule({
  imports: [NgxPrimerAccordionModule],
  ...
})
export class AppModule {}
```

2. Use the component in your templates:

```html
<ngx-primer-accordion-root [type]="'Single'" [collapsible]="true">
  <ngx-primer-accordion-item [value]="'item1'">Item 1 Content</ngx-primer-accordion-item>
  <ngx-primer-accordion-item [value]="'item2'">Item 2 Content</ngx-primer-accordion-item>
</ngx-primer-accordion-root>
```

## Available Components

The `ngx-primer` library includes a variety of components inspired by the Primer Design System, including:

- Accordion
- Buttons
- Cards
- Forms
- Icons
- Layouts
- Navigation
- Modals
- And more...

Each component is designed to be flexible and easily customizable to fit your application's needs.

## Running Unit Tests

To run the unit tests for the project, use the following command:

```bash
nx test ngx-primer
```

This will run the tests using the Jest framework.

## Contributing

We welcome contributions to `ngx-primer`! If you want to add a new component, improve an existing one, or fix a bug, feel free to submit a pull request. Please follow the [contribution guidelines](CONTRIBUTING.md) for more details.

## Credits

This project is inspired by the [Primer Design System](https://primer.style/), created and maintained by GitHub. We would like to credit the GitHub team and all the contributors to the Primer Design System for their work on this incredible resource.

- [Primer Design System](https://primer.style/)
- [Primer GitHub Repository](https://github.com/primer)

And never forgetting special Thanks To (credit for project inspirations) :

- [Angular Primitives](https://angularprimitives.com/getting-started/introduction)
- [Angular CDK](https://material.angular.io/cdk)
- [Radix UI](https://radix-ui.com/)

## License

`ngx-primer` is licensed under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

See the [LICENSE](LICENSE) file for more information.

## Changelog

For details on what's changed in each release, check out the [Changelog](CHANGELOG.md).
