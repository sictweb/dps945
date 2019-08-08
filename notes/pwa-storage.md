---
title: Storage choices for your PWA
layout: default
---

## Storage choices for your PWA

<mark>&nbsp;This document is being edited.<br>This notice will be removed when the edits are complete.&nbsp;</mark>

Our progressive web app (PWA) can use different kinds of storage:
* local or session storage 
* in Service Worker, the Cache API 
* IndexedDB for general data storage 

### Local or session storage

Highlights:

`window.localStorage` 
* small amounts 
* no expiration date
* strings only
* not secure

`window.sessionStorage`
* small amounts
* disposable - it disappears when a tab/window is closed

Service Worker, Cache API 
* for your app's resources (HTML, CSS, JS, images, etc.)

IndexedDB
* typed data (including strings) 

How much can be stored? See [this linked document](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa#how_much_can_i_store). 

<br>

( more to come, including code examples )

<br>

### Learning resources

Start here:

Google Developers, [Web Storage]()  

Then use the left-side nav links for related topics. 

<br>
