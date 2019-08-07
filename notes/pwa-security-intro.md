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

The security decision is based on a *token*. Yes, we are using the browser DOM, and therefore have access to session and cookies, we will prefer to use a token. 

Why? A few reasons. For the MO:VES app, we think that tokens will work better. And the most important reason is that the back end web API is configured to work with tokens. It has a *login* resource, which will return a token after a successful authentication. And, it has a number of other resources, some of which require a token in the request. 

> Reminder or notice...  
> From a security perspective, a token and a cookie have similar functionality. Both packages hold information about the authenticated user.  
> The way that they are used is a bit different however, as you will learn. 

In our PWA, we will add/write a component that will be a *login page*. It will gather the credentials from the user/volunteer, and then send a request to the web API *login* resource. The web API will return a token, which the PWA will save somewhere (for example in `window.localStorage`, or more preferably in local persistent storage). 

The security decision - a function - will fetch or retrieve the locally-saved token. Then, it will decode the token. To do this, we need Passport JWT support in the PWA, and therefore we also need the shared secret (the `secretOrKey` value that is in the web API). 

> The shared secret is how the *trust* relationship is created.  
> The web API *trusts* a specific PWA by *giving* it the shared secret.    
> In our app pair - the web API and the PWA - we are not concerned with securely storing the shared secret.  
> However, when this is needed, there are understandable and widely-used techniques that enable this higher level of security. 

<br>

### Resources and code samples

(coming soon)

<br>
