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
* Create user with a special profile (e.g. user account manager, or developer/tester)
* Editor for creating and editing viewable/page content 

Similarly, we should think about how to implement:
* A process to update and republish the app

<br>

### Overview of the web API pieces

At this point, we anticipate needing storage and code for the following features and functionality:
1. [Identity management](#identity-management) (i.e. user accounts)
2. [Authentication of credentials](#authentication-of-credentials) (and subsequent delivery of a token)
3. [Authentication of a token](#authentication-of-a-token) 
4. [Text content](#text-content) for viewing in a browser or app, multi-language, database-stored 
5. [Media content](#media-content) for above, probably stored in the file system (or equivalent) 
6. [List/directory](#listdirectory) of ICVA people (volunteers, leaders, etc.)
7. [App usage logging](#app-usage-logging)
8. [Alerts](#alerts), news, announcements, notices, events; anything that is to be received by all or by named groups only 
9. [Emergency contacts](#emergency-contacts) 

Other possibilities (as we have not yet seen the wireframes / mockups):
* User profile, detailed 
* Location tracking and notification (whereabouts)
* Offline content for the area 
* Incident reporting 

<br>

### Identity management 

This feature consists of the following: 
* A database collection (table) of user accounts 
* Perhaps a defined (in code) or database collection of allowable roles 
* Code that will enable the creation of a new user account (and perhaps password change)

#### User account entity design

We suggest the following user account entity properties:

Key name | Data type | Comments
--- | --- | ---
userName | string | Formatted as an email address
fullName | string | 
password | string | Initially an empty string
statusActivated | boolean | Initially false, but true after an account is created or re-activated 
statusLocked | boolean | Initially false, but true after lock-out action is done
roles | array (1) | Role claims 
claims | array (2) | Initially empty, for claims

(1) Array of zero or more strings  
(2) Array of zero or more claims, each of which is a key-value pair of strings (see below)

#### Role 

A role is a string identifier, used to describe a fairly large number of user accounts that share a common access- or use-oriented goal in your app. For example, "employee", "customer". Or, "manager", "administrator", "clerk". Or, "student", "faculty", "staff". Or, "developer", "userAccountManager", "tester".

In an app, a very limited number of roles should be defined, perhaps as few as five or less. Roles are intended to be coarse-grained, and to broadly define or capture a category of user accounts. 

As noted above, the allowable roles - used to verify a requested role during the "create user account" task - can be defined in code or stored in a database collection. To start, simply define the allowable roles as a string array (constant). 

Do NOT use roles for any of the following purposes:
* Fine-grained access control to a resource
* Permission to perform an activity
* Descriptive or personalization information

Instead, handle these purposes by using claims.

#### Claim 

A claim is string content for *descriptive information* about *participant* in a secure system. The participant could be a human user (as represented by a user account), a corporate body, or a programmable object or module. 

A claim can be used by a system for any of these reasons:
1. To provide descriptive information (e.g. full name)
2. To control access to a resource
3. To control the permission to perform tasks or activities

A user account has a collection (an array) of zero or more claims. 

The structure of a claim is that of a simple object, with one key-value pair (of strings). For example:

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

In the MO:VES app, there will likely be a small number of claims, but the design will easily accommodate more if needed during the lifetime of the project. 

What keys and values should be  used? Apart from a few well-understood descriptive keys (e.g. first name, last name, home country, etc.), we need to cover #2 (control access) and #3 (control permission) from above. 

For access control, let's use a claim key name "OU". We borrow this concept from [directory services](https://en.wikipedia.org/wiki/Directory_service), and specifically an [organizational unit](https://en.wikipedia.org/wiki/Organizational_unit_(computing)), or OU. The concept of an OU is quite flexible, and can help solve problems from many different knowledge domains. Its value can identify a group of user accounts by job function, location, company department/division, and so on. 

For permission control, let's use a claim key "Task". Its value probably should be Pascal case word that combines the resource or task and the activity to be performed. For example:
* Task = UserProfileEdit
* Task = LocaleInfoView
* Task = MessageSend

> Validating and organizing the claims is beyond the scope of this project.  
> For our purposes, in this app, we will attempt to limit the number of claims

#### Create user account

You have seen and used this code before. 

Ensure that the incoming request includes at least one requested role. Depending on your app's logic needs, you may also require at least one claim. 

For this app, ensure that the role(s) requested are allowed, by comparing each with the predefined role collection. 

#### Password change 

Perhaps a number of students can collaborate on this task and then share the results. It's not difficult, but it must be done correctly. Remember the following:
* Only the user can change their own password 
* Gather the old password, and two separate new passwords (which are compared)
* Return appropriate messages on success or failure

#### Add a claim to a user account

Similarly, this could be a collaborative task. Maybe this ought to be available only to a request that has a "userAccountManager" role. The idea is that a user should not be able to modify their access and permission control without oversight. 

<br>

### Authentication of credentials

As you have learned in the past, this feature is mostly code, which uses the above-defined user account storage. 

At a minimum, the code will process an authentication (login) request, and then deliver a token. 

<br>

### Authentication of a token

<mark>&nbsp;( more to come )&nbsp;</mark>

<br>

### Text content

...for viewing in a browser or app, multi-language, database-stored 

<br>

### Media content

...for above, probably stored in the file system (or equivalent) 

<br>

### List/directory

...of ICVA people (volunteers, leaders, etc.)

<br>

### App usage logging

<br>

### Alerts

...news, announcements, notices, events; anything that is to be received by all or by named groups only 

<br>

### Emergency contacts 

<br>
