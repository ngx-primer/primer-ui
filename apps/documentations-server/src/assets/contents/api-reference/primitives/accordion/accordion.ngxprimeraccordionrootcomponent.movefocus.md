<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@ngx-primer/accordion](./accordion.md) &gt; [NgxPrimerAccordionRootComponent](./accordion.ngxprimeraccordionrootcomponent.md) &gt; [moveFocus](./accordion.ngxprimeraccordionrootcomponent.movefocus.md)

## NgxPrimerAccordionRootComponent.moveFocus() method

Moves the focus to the next or previous accordion item based on the given direction.

This method calculates the next index of the accordion item based on the current index and the direction, ensuring the focus wraps around if the index goes beyond the bounds of the accordion items list. It then sets focus to the calculated item.

**Signature:**

```typescript
moveFocus(currentIndex: number, direction: number): void;
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

currentIndex


</td><td>

number


</td><td>

The index of the currently focused accordion item.


</td></tr>
<tr><td>

direction


</td><td>

number


</td><td>

The direction in which to move the focus. A positive value moves the focus forward, while a negative value moves the focus backward.


</td></tr>
</tbody></table>
**Returns:**

void

{<!-- -->void<!-- -->} This method does not return any value.
