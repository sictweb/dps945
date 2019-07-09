---
title: Task - hypermedia representation
layout: default
---

## Generate a hypermedia representation

The goal of this task is to write a function that will accept an object or array (and a string path), and return the data in a hypermedia representation (HR). 

The caller will be any of the Express.js functions in your `server.js` code (e.g. `app.get`). For example:

```js
// Assume that "o" is a variable that holds the result of a "get one" request to the data store

// Return, bare (not a hypermedia representation)
res.json(o);

// Return, as a hypermedia representation
// Call the generator function
res.json(generate(o, '/api/users'));
```

<br>

### HR design or shape

As [described in the notes](hypermedia-representation#a-package-schemedesign-that-includes-links), the HR should look like the following, for an object (after conversion to JSON):

<a href="task-hr-item" target="_blank">HR for an item</a>

The HR for an array should look like the following (after conversion to JSON):

<a href="task-hr-collection" target="_blank">HR for an array</a>

<br>

### Algorithm, guidance

If you need it, here is some guidance about how to write the function:

```js
// The function accepts two arguments:
// The data (object or array)
// A string path to the resource collection
// (e.g. /api/products)

// The function will return an object
// The data will be packaged inside
// The caller will then run the package through JSON.stringify()

// First task, create an object that will be the package
// Add the known metadata (i.e. timestamp, version)

// Determine if the incoming data is an object or an array

// If it is an object...
// =====================

// Package links will have self and collection
// Item links will have self and collection
// Incoming data is put into an array and added to the package
// Set the package count value

// If it is an array...
// ====================

// Package links will have self only
// Item links will have self for each item, generated 
// (this can be done at least two ways, array forEach(), 
// or array map() with spread syntax to add a new object property)
// Set the package count value

// At the end, return the packaged data
// (but not as JSON - leave that task to the caller)

```

<br>
