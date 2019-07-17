---
title: Web API project specs
layout: default
---

## MO:VES Project Web API Specifications

This was most recently revised on July 16, 2019. 

<mark>This document is being edited.<br>This notice will be removed when the edits are complete.</mark>

<br>

### Companion browser app to manage the Web API

We should have a simple browser app that will manage some of the data in the web API. For example:
* Create user with a special profile
* Editor for new viewable/page content 

Similarly, we should think about how to implement:
* A process to update and republish the app

<br>

### Overview of the web API pieces

At this point, we anticipate needing storage and code for the following features and functionality:
1. Identity management (i.e. user accounts)
2. Authentication of credentials (and subsequent delivery of a token)
3. Text content for viewing in a browser or app, multi-language, database-stored 
4. Media content for above, probably stored in the file system (or equivalent) 
5. List/directory of ICVA people (volunteers, leaders, etc.)
6. App usage logging
7. Alerts, news, announcements, notices, events; anything that is to be received by all or by named groups only 
8. Emergency contacts 

Other possibilities (as we have not seen the wireframes / mockups):
* User profile, detailed 
* Location tracking and notification (whereabouts)
* Offline content for the area 
* Incident reporting 

<br>

### Identity management 

This feature consists of the following: 
* A database collection (table) of user accounts 
* Perhaps a database collection of allowable roles 
* Code that will enable the creation of a new user account (and perhaps password change)

#### User account entity design

( more to come)

#### Role 

A role is a string identifier that's intended to apply to a sizeable portion of the user accounts. A role should be used to describe a user accounts that share a access- or use-oriented goal in your app.

A very limited number of roles should be defined, perhaps as few as five or less. Roles are intended to be coarse-grained, and to broadly define or capture a category of user accounts. 

Do NOT use roles for any of the following purposes:
* Fine-grained access control to a resource
* Permission to perform an activity
* Descriptive or personalization information

Instead, capture these purposes by using claims.

#### Claim 

A claim is string content of *descriptive information* about *participant* in a secure context. The participant could be a human user (as represented by a user account), a corporate body, or a programmable object or module. 

A claim can be used by an application for any of these reasons:
1. To provide descriptive information (e.g. full name)
2. To control access to a resource
3. To control the permission to perform tasks or activities
etc.

The structure of a claim is that of a simple object, with one key-value pair (of strings):

```js
// info that could be used to describe
{ firstName: 'Peter' }
// or...
// info that could be used to control access
{ OU: "Morocco" }
// or...
// info that could be used to perform a task or activity
{ Task: 'UserProfileEdit' }
```

A user account has a collection (an array) of zero or more claims. 

( more to come )

> Validating and organizing the claims is beyond the scope of this project.  
> For our purposes, we will limit the number of claims 

<br>
