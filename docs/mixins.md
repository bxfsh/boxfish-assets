---
layout: page
title: Mixins
permalink: /mixins/
---

### Tint

Mix a color with white.

```scss
color: tint(#eee, 50%);
```

___

### Shade

Mix a color with black.

```scss
color: shade(blue, 5%);
```

___

### Clearfix
```scss
// Usage
.element {
  @include clearfix;
}

// Output
.element {
  &::after {
    clear: both;
    content: "";
    display: table;
  }
}
```

___

### Create Loader

Create a new loader.

```scss
// Usage
@include createLoader($name, $size: 1.5em, $color: $purple)
```

{% include components/loaders.html %}

___

### Light Shadow

Add a light shadow to an element.

```scss
// Usage
.element {
  @include light-shadow;
}

// Output
.element {
  box-shadow: 0 1px 8px 0 rgba($light-grey, 0.2)
}
```

___

### Gradient

```scss
.element {
  @include gradient(blue);
}
```

___

### Position

Specify an elements position and boundary arguments.

```scss
// Usage
.element {
  @include position(fixed, 0, 0, 0, 0);
}


// Output
.element {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

___

### Position Fixed

Give an element a fixed positioning. Includes `backface-visibility` to increase performance.

```scss
// Usage
.element {
  @include position-fixed;
}

// Output
.element {
  position: fixed;
  backface-visibility: hidden;
}
```
