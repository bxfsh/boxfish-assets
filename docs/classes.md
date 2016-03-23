---
layout: page
title: Classes
permalink: /classes/
---

___

### Animated Ellipsis

Add an animated ellipsis to a string by adding the `animated-ellipsis` class to an element.

```html
<span class="animated-ellipsis">Loading</span>
```

{% include components/ellipsis.html %}

___

### Flex

```scss
.flex                   { display: flex }
.flex-wrap              { flex-wrap: wrap }
.flex-direction-column  { flex-direction: column }
.flex-direction-row     { flex-direction: row }
.flex-span-[1-10]       { flex: (1-10) }
```

___

### Alignment

```scss
.block                  { display: block }
.inline-block           { display: inline-block }
.text-center            { text-align: center }
.text-right             { text-align: right }
.text-left              { text-align: left }
```

___

### Visibility

```scss
.visibility-hidden      { visibility: hidden }
.hidden                 { display: none }
```

___

### Font Styles

```scss
.bold                   { font-weight: 600 }
.block                  { display: block }
.small                  { font-size: 0.8em }
.italic                 { font-style: italic font-weight: 400 }
.strong                 { font-weight: bold }
.lowercase              { text-transform: lowercase }
.uppercase              { text-transform: uppercase }
.capitalize             { text-transform: capitalize }
.no-underline           { text-decoration: none }
.cursor                 { cursor: pointer }
.cursor-help            { cursor: help }
.text-overflow          { @extend %text-overflow }
```

___

### Font Colors

```scss
.blue                   { color: $blue }
.purple                 { color: $purple }
.green                  { color: $green }
.red                    { color: $red }
.light-grey             { color: $light-grey }
.dark-grey              { color: $dark-grey }
.twitter                { color: $twitter }
```

___

### Background Colors

```scss
.grey-bg                { background: $modal-grey    }
.background-grey        { background: $background-grey }
.white-bg               { background: white }
```

___

### Padding

```scss
.padding                { padding: 1em }
.no-padding             { padding: 0 }
.padding-top            { padding-top: 1em }
.padding-bottom         { padding-bottom: 1em }
.padding-right          { padding-right: 1em }
.padding-left           { padding-left: 1em }
```

___

### Margins

```scss
.margin                 { margin: 1em }
.no-margin              { margin: 0 }
.margin-top             { margin-top: 1em }
.margin-bottom          { margin-bottom: 1em }
.margin-right           { margin-right: 1em }
.margin-left            { margin-left: 1em }
```

___

### Borders

```scss
.border                 { border: $border }
.no-border              { border: none }
.border-top             { border-top: 1em }
.border-bottom          { border-bottom: 1em }
.border-right           { border-right: 1em }
.border-left            { border-left: 1em }
```

___
