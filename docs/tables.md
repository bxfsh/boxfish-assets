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
