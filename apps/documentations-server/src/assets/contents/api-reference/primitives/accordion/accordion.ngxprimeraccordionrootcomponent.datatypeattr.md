<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@ngx-primer/accordion](./accordion.md) &gt; [NgxPrimerAccordionRootComponent](./accordion.ngxprimeraccordionrootcomponent.md) &gt; [dataTypeAttr](./accordion.ngxprimeraccordionrootcomponent.datatypeattr.md)

## NgxPrimerAccordionRootComponent.dataTypeAttr property

Gets the value of the `data-type` attribute for the accordion element.

This property is bound to the result of the `type()` method, which determines the type of the accordion (e.g., `Single` or `Multiple`<!-- -->). The `data-type` attribute is dynamically set on the DOM element, reflecting the current accordion type.

This is useful for targeting the accordion element in styles or for other DOM-related behaviors based on its type, allowing different types of accordions to be easily identified and styled differently if needed.


**Signature:**

```typescript
get dataTypeAttr(): import("../../configs/accordion-config").NgxPrimerAccordionType | "Single" | "Multiple";
```
