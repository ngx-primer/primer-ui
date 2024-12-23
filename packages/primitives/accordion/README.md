# ngx-primer-accordion

`ngx-primer-accordion` is an advanced, flexible, and configurable accordion component library for Angular applications. Built with ease of integration, extensive customization options, and high accessibility standards in mind, this library provides a modern accordion solution for displaying content in a collapsible panel format. It was generated using [Nx](https://nx.dev).

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Advanced Configuration](#advanced-configuration)
- [Features](#features)
- [Styling](#styling)
- [Running Unit Tests](#running-unit-tests)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

To install the `ngx-primer-accordion` package in your Angular project, use one of the following commands depending on your package manager:

### Using npm:

```bash
npm install ngx-primer-accordion
```

### Using Yarn:

```bash
yarn add ngx-primer-accordion
```

---

## Usage

### Basic Usage

To get started with the accordion component, import the main component `NgxPrimerAccordionRootComponent` into your module:

```typescript
import { NgxPrimerAccordionRootComponent } from 'ngx-primer-accordion';

@NgModule({
  declarations: [YourComponent, NgxPrimerAccordionRootComponent],
  imports: [NgxPrimerAccordionRootComponent],
})
export class YourModule {}
```

### In your HTML template:

```html
<ngx-primer-accordion-root>
  <ngx-primer-accordion-item [value]="1">
    <div ngxPrimerAccordionHeader>Item 1 Header</div>
    <div ngxPrimerAccordionBody>Content for item 1</div>
  </ngx-primer-accordion-item>
  <ngx-primer-accordion-item [value]="2">
    <div ngxPrimerAccordionHeader>Item 2 Header</div>
    <div ngxPrimerAccordionBody>Content for item 2</div>
  </ngx-primer-accordion-item>
</ngx-primer-accordion-root>
```

### Advanced Configuration

The `ngx-primer-accordion-root` component offers several input properties for customizing its behavior:

- **`type`**: Determines the accordion behavior. Use `Single` for a single item open at a time, and `Multiple` for multiple items. (Default: `'Multiple'`)
- **`collapsible`**: Enables or disables the ability to collapse all accordion items. (Default: `false`)
- **`orientation`**: Sets the orientation of the accordion, either `'horizontal'` or `'vertical'`. (Default: `'vertical'`)
- **`value`**: Holds the current selected item or items.
- **`disabled`**: Disables interaction with the accordion when set to `true`.
- **`defaultValue`**: Provides an initial value when the accordion renders for the first time.

Example with advanced options:

```html
<ngx-primer-accordion-root
  [type]="'Single'"
  [collapsible]="true"
  [orientation]="'horizontal'"
  [disabled]="false"
>
  <ngx-primer-accordion-item [value]="1">
    <div ngxPrimerAccordionHeader>Item 1 Header</div>
    <div ngxPrimerAccordionBody>Content for item 1</div>
  </ngx-primer-accordion-item>
  <ngx-primer-accordion-item [value]="2">
    <div ngxPrimerAccordionHeader>Item 2 Header</div>
    <div ngxPrimerAccordionBody>Content for item 2</div>
  </ngx-primer-accordion-item>
</ngx-primer-accordion-root>
```

---

## Features

- **Collapsible Panels**: Supports both single-item and multiple-item selections, depending on your configuration.
- **Highly Customizable**: Offers various configuration options to tailor the accordion to your application's needs.
- **Accessible**: Built with accessibility best practices in mind, supporting keyboard navigation, screen readers, and other accessibility requirements.
- **Theming Options**: Easily integrate your app's design with optional themes through CSS or custom directives.
- **Integration with ID Generator**: Generates IDs for accordion items automatically, or manually when configured.

---

## Styling

The `ngx-primer-accordion` library is built with flexibility in mind, allowing you to customize the appearance of the accordion through CSS or other styling methods.

### CSS Theming

- Use the default styles provided in `accordion-root.component.scss`.
- Override styles by applying custom CSS rules in your project's global styles or dedicated stylesheet files.

### SCSS Variables

- For advanced styling, you can use CSS variables for things like colors, dimensions, and spacing.
- Integrate these styles using Tailwind CSS, CSS preprocessors, or other styling systems.

---

## Running Unit Tests

To execute the unit tests for this library, you can use the built-in Nx command:

```bash
nx test ngx-primer-accordion
```

This command will run all configured tests for the accordion component.

---

## Contributing

Contributions to the ngx-primer-accordion library are welcome! To get involved:

1. Fork the repository on GitHub.
2. Clone your fork to your local machine.
3. Create a new branch for your feature or bugfix.
4. Write tests for any new or modified functionality.
5. Submit a pull request with a clear and concise description of your changes.

### Code of Conduct

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) while contributing.

---

## License

The `ngx-primer-accordion` library is licensed under the **MIT License**. Feel free to use, modify, and distribute it for personal or commercial projects.

---

### What's Included:

- **Installation Instructions**: How to get the package up and running.
- **Usage Examples**: Basic and advanced usage, including HTML markup and configuration options.
- **Features**: Highlights the main capabilities of the accordion component.
- **Styling**: Explains how to style the accordion component for your application's look.
- **Running Tests**: Provides commands and steps to execute unit tests for your accordion component.
- **Contributing Guide**: Instructions for contributing to the project.
- **License Information**: Legal information for project users.

This structured README provides a clear and concise overview of the library's capabilities, installation requirements, and usage instructions, helping other developers to quickly integrate the accordion into their applications.

---

This version of the README is formatted for easy reading and comprehension, with sections for installation, usage examples, features, tests, contributing guidelines, and license details.
