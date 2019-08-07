---
title: PWA security intro
layout: default
---

## PWA security intro

This document presents one technique that implements security principles in a React progressive web app (PWA). 

<br>

### Highlights

Our React apps typically use the `react-router-dom` package to enable routing tasks that are based on URL segments. 

As you know, in the route list, each route element has a `render` attribute. This is what we will use and configure. 

<br>

### The technique

The following is a typical route element from the `App.js` source code file:

```jsx
<Route exact path='/horse' render={() => (<ContactUs />)} />
```

The value of the render attribute is a function. Normally it *returns* an element (which is a component named "ContactUs" in the example above). 

The technique is to *return* an element that's based on a security decision. We add/write a function (in `App.js`) that can return an element (if successful) or do some other action (nothing, redirect, return another element). 

<br>

#### Other considerations

The security decision is based on a *token*. 

<br>

### Resources

(coming soon)

<br>
