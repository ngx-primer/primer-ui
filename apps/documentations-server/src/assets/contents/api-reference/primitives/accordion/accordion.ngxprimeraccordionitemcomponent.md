<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@ngx-primer/accordion](./accordion.md) &gt; [NgxPrimerAccordionItemComponent](./accordion.ngxprimeraccordionitemcomponent.md)

## NgxPrimerAccordionItemComponent class

**Signature:**

```typescript
export declare class NgxPrimerAccordionItemComponent<T> implements OnInit 
```
**Implements:** OnInit

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[accordionContent](./accordion.ngxprimeraccordionitemcomponent.accordioncontent.md)


</td><td>

`readonly`


</td><td>

[NgxPrimerAccordionContentComponent](./accordion.ngxprimeraccordioncontentcomponent.md)<!-- -->&lt;any&gt; \| undefined


</td><td>


</td></tr>
<tr><td>

[accordionContentContext](./accordion.ngxprimeraccordionitemcomponent.accordioncontentcontext.md)


</td><td>

`protected`

`readonly`


</td><td>

import("@angular/core").Signal&lt;[NgxPrimerAccordionContentComponent](./accordion.ngxprimeraccordioncontentcomponent.md)<!-- -->&lt;any&gt; \| undefined&gt;


</td><td>

Accordion content instance.


</td></tr>
<tr><td>

[accordionItemId](./accordion.ngxprimeraccordionitemcomponent.accordionitemid.md)


</td><td>

`protected`

`readonly`


</td><td>

string \| undefined


</td><td>


</td></tr>
<tr><td>

[accordionRoot](./accordion.ngxprimeraccordionitemcomponent.accordionroot.md)


</td><td>

`readonly`


</td><td>

[NgxPrimerAccordionRootComponent](./accordion.ngxprimeraccordionrootcomponent.md)<!-- -->&lt;any&gt; \| null


</td><td>


</td></tr>
<tr><td>

[accordionRootContext](./accordion.ngxprimeraccordionitemcomponent.accordionrootcontext.md)


</td><td>

`protected`

`readonly`


</td><td>

[NgxPrimerAccordionRootComponent](./accordion.ngxprimeraccordionrootcomponent.md)<!-- -->&lt;any&gt; \| null


</td><td>


</td></tr>
<tr><td>

[accordionTrigger](./accordion.ngxprimeraccordionitemcomponent.accordiontrigger.md)


</td><td>

`readonly`


</td><td>

[NgxPrimerAccordionTriggerComponent](./accordion.ngxprimeraccordiontriggercomponent.md)<!-- -->&lt;any&gt; \| undefined


</td><td>


</td></tr>
<tr><td>

[accordionTriggerContext](./accordion.ngxprimeraccordionitemcomponent.accordiontriggercontext.md)


</td><td>

`protected`

`readonly`


</td><td>

import("@angular/core").Signal&lt;[NgxPrimerAccordionTriggerComponent](./accordion.ngxprimeraccordiontriggercomponent.md)<!-- -->&lt;any&gt; \| undefined&gt;


</td><td>

Accordion trigger instance.


</td></tr>
<tr><td>

[dataDisabledAttr](./accordion.ngxprimeraccordionitemcomponent.datadisabledattr.md)


</td><td>

`readonly`


</td><td>

boolean \| undefined


</td><td>


</td></tr>
<tr><td>

[dataIsOpenAttr](./accordion.ngxprimeraccordionitemcomponent.dataisopenattr.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[dataOrientationAttr](./accordion.ngxprimeraccordionitemcomponent.dataorientationattr.md)


</td><td>

`readonly`


</td><td>

import("../../configs/accordion-config").NgxPrimerAccordionOrientation \| "Vertical" \| "Horizontal" \| undefined


</td><td>


</td></tr>
<tr><td>

[dataValueAttr](./accordion.ngxprimeraccordionitemcomponent.datavalueattr.md)


</td><td>

`readonly`


</td><td>

T \| null


</td><td>


</td></tr>
<tr><td>

[disabled](./accordion.ngxprimeraccordionitemcomponent.disabled.md)


</td><td>

`readonly`


</td><td>

import("@angular/core").ModelSignal&lt;boolean&gt;


</td><td>

Whether the accordion item is disabled.


</td></tr>
<tr><td>

[idGenerator](./accordion.ngxprimeraccordionitemcomponent.idgenerator.md)


</td><td>

`protected`

`readonly`


</td><td>

NgxPrimerIdGeneratorDirective \| null


</td><td>


</td></tr>
<tr><td>

[injector](./accordion.ngxprimeraccordionitemcomponent.injector.md)


</td><td>

`protected`

`readonly`


</td><td>

Injector


</td><td>


</td></tr>
<tr><td>

[isOpen](./accordion.ngxprimeraccordionitemcomponent.isopen.md)


</td><td>

`readonly`


</td><td>

import("@angular/core").Signal&lt;boolean&gt;


</td><td>


</td></tr>
<tr><td>

[ɵcmp](./accordion.ngxprimeraccordionitemcomponent._cmp.md)


</td><td>

`static`


</td><td>

i0.ɵɵComponentDeclaration&lt;[NgxPrimerAccordionItemComponent](./accordion.ngxprimeraccordionitemcomponent.md)<!-- -->&lt;any&gt;, "ngx-primer-accordion-item", \["ngxPrimerAccordionItemComponent"\], { "value": { "alias": "ngxPrimerAccordionItemValue"; "required": false; "isSignal": true; }; "disabled": { "alias": "ngxPrimerAccordionItemDisabled"; "required": false; "isSignal": true; }; }, { "value": "ngxPrimerAccordionItemValueChange"; "disabled": "ngxPrimerAccordionItemDisabledChange"; }, \["accordionContentContext", "accordionTriggerContext"\], \["\*"\], true, \[{ directive: typeof i1.NgxPrimerIdGeneratorDirective; inputs: { "ngxPrimerIdAttr": "ngxPrimerIdAttr"; }; outputs: {}; }\]&gt;


</td><td>


</td></tr>
<tr><td>

[ɵfac](./accordion.ngxprimeraccordionitemcomponent._fac.md)


</td><td>

`static`


</td><td>

i0.ɵɵFactoryDeclaration&lt;[NgxPrimerAccordionItemComponent](./accordion.ngxprimeraccordionitemcomponent.md)<!-- -->&lt;any&gt;, never&gt;


</td><td>


</td></tr>
<tr><td>

[value](./accordion.ngxprimeraccordionitemcomponent.value.md)


</td><td>

`readonly`


</td><td>

import("@angular/core").ModelSignal&lt;T \| null&gt;


</td><td>


</td></tr>
</tbody></table>

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[focus()](./accordion.ngxprimeraccordionitemcomponent.focus.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[ngOnInit()](./accordion.ngxprimeraccordionitemcomponent.ngoninit.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[runInitializationFn(doneFn)](./accordion.ngxprimeraccordionitemcomponent.runinitializationfn.md)


</td><td>

`protected`


</td><td>

Runs the initialization logic for the accordion component, setting up default values and context.

This method initializes the accordion component, optionally setting a default value if provided. It also sets the context instance to allow dependency injection in child components, preventing the need for manual prop drilling.

If a `doneFn` callback is provided, it will be executed after the initialization process with the current context and value.

\#\#\# Parameters - `doneFn` (Optional): A callback function that will be executed after initialization. It receives an object with the `context` and `value` properties, where: - `context`<!-- -->: The current instance of the accordion component's root context. - `value`<!-- -->: The current value of the accordion, either the default value or a set value.

\#\#\# Returns This method does not return anything. It performs initialization tasks and optionally invokes the callback.

\#\#\# Example Usage

```typescript
// In the accordion component
this.runInitializationFn((params) => {
  console.log('Accordion initialized with context:', params.context);
  console.log('Initial value:', params.value);
});
```
\#\#\# Description - \*\*Context Setup\*\*: The `accordionRootContext.instance` is set to the current accordion instance, making it accessible for child components through dependency injection. - \*\*Default Value\*\*: If a default value is set for the accordion, it will be applied at initialization. - \*\*Callback Execution\*\*: If the `doneFn` callback is provided, it is executed with the current context and value.


</td></tr>
</tbody></table>
