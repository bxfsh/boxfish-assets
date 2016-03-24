---
layout: page
title: Devices
permalink: /devices/
---

### devices
Target multiple devices at once.

Params order: `xs`, `sm`, `md`, `lg`

> NOTE Params are all false by default.

```scss
// Usage
.element {
  @include devices(true, true, false, false) {
    // Targets x-small and small devices only
  }
}
```

___

### xs-device

Target extra-small devices.

```scss
.element {
  @include xs-device {
    // attribute exclusive to extra small devices
  }
}
```

___

### sm-device

Target small devices.

```scss
.element {
  @include sm-device {
    // attribute exclusive to small devices
  }
}
```
___

### md-device

Target medium size devices.

```scss
.element {
  @include md-device {
    // attribute exclusive to medium devices
  }
}
```
___

### lg-device

Target large devices.

```scss
.element {
  @include lg-device {
    // attribute exclusive to large devices
  }
}
```
___
