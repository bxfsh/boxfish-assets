---
layout: page
title: Tables
permalink: /tables/
---

### Flex Table
Flex table is an alternative to the `<table>` tag which uses flex to style the layout of the table.

{% include components/flex-table.html %}

> TIP: Add a `cell-flex-(1-10)` class to a `flex-table-cell` to flex a specific width from 1 - 10

```html
<div class="flex-table">
  <div class="flex-table-header">
    <div class="flex-table-row">
      <div class="flex-table-cell">Header 1</div>
      <div class="flex-table-cell">Header 2</div>
      <div class="flex-table-cell">Header 3</div>
    </div>
  </div>

  <div class="flex-table-body">
    <div class="flex-table-row">
      <div class="flex-table-cell">One</div>
      <div class="flex-table-cell">Two</div>
      <div class="flex-table-cell">Three</div>
    </div>
  </div>
</div>
```

___

### Responsive Table
Tables with the `table-responsive` class will break on small and extra-small devices.

{% include components/responsive-table.html %}

> NOTE the `data-label` attribute is required on the <td> elements.

```html
<table class="table table-responsive">
  <thead>
    <tr>
      <th>One</th>
      <th>Two</th>
      <th>Three</th>
      <th>Four</th>
      <th>Five</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td data-label="One">One</td>
      <td data-label="Two">Two</td>
      <td data-label="Three">Three</td>
      <td data-label="Four">Four</td>
      <td data-label="Five">Five</td>
    </tr>
  </tbody>
</table>
```
