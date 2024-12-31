<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@ngx-primer/accordion](./accordion.md) &gt; [NgxPrimerAccordionRootComponent](./accordion.ngxprimeraccordionrootcomponent.md) &gt; [toogleMultiple](./accordion.ngxprimeraccordionrootcomponent.tooglemultiple.md)

## NgxPrimerAccordionRootComponent.toogleMultiple() method

Toggles the state of multiple accordion items. If the item is being opened (`isOpenValue = false`<!-- -->), it adds the value to the list of open items. If the item is being closed (`isOpenValue = true`<!-- -->), it removes the value from the list of open items.

This method is used for managing multiple accordion items where more than one item can be open at a time. It ensures that the internal value is updated with the correct set of open items, either adding or removing the given `value` based on its current state.


**Signature:**

```typescript
protected toogleMultiple(value: T, isOpenValue: boolean): void;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

value


</td><td>

T


</td><td>

The value to check. This can be any type defined for the accordion values (e.g., string, number, etc.).


</td></tr>
<tr><td>

isOpenValue


</td><td>

boolean


</td><td>

Indicates whether the accordion item is being opened (`false`<!-- -->) or closed (`true`<!-- -->).


</td></tr>
</tbody></table>
**Returns:**

void

{<!-- -->void<!-- -->} This method does not return anything.
