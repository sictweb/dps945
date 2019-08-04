---
title: Web API project specs
layout: default
---

## MO:VES Project Web API Specifications

This was most recently revised on July 18, 2019. 

<br>

### Companion browser app to manage the Web API

We should have a simple browser app that will manage some of the data in the web API. For example:
* Create user with a special profile (e.g. user account manager, or developer/tester)
* Editor for creating and editing viewable/page content 
* Functionality to define, describe, and store non-text content (e.g. an image) 
* Maintain the list/directory of ICVA people 
* Create an alert (or announcement, etc. )
* Maintain location-based emergency contact info (maybe) 

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
7. [Alerts](#alerts), news, announcements, notices, events; anything that is to be received by all or by named groups only 
8. [Emergency contacts](#emergency-contacts) 
9. [Location tracking](#location-tracking)
10. [App usage logging](#app-usage-logging)

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

Property | Data type | Comments
--- | --- | ---
userName | string | Formatted as an email address
fullName | string | 
password | string | Initially an empty string
statusActivated | boolean | Initially false, but true after an account is created or re-activated 
statusLocked | boolean | Initially false, but true after lock-out action is done
roles | array (1) | Role claims 
claims | array (2) | Initially empty, for claims

(1) Array of zero or more strings  
(2) Array of zero or more claims, each of which is an object as defined below

#### Role 

A role is a string identifier, used to describe a fairly large number of user accounts that share a common access- or use-oriented goal in your app. For example, "employee", "customer". Or, "manager", "administrator", "clerk". Or, "student", "faculty", "staff". Or, "contentEditor", "developer", "userAccountManager", "tester".

> What roles do you think we need for this app?

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

The structure of a claim object is shown below. It has two string properties, "type" and "value". For example:

```js
// info that could be used to describe
{ type: 'firstName', value: 'Peter' }
// or...
// info that could be used to control access
{ type: 'OU', value: "Morocco" }
// or...
// info that could be used to perform a task or activity
{ type: 'Task', value: 'UserProfileEdit' }
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

Remember, the token, when encoded by Passport.js, includes information about the user account, including roles and claims, but it does not include any secrets (like the user account password). 

<br>

### Authentication of a token

You have seen and used this code before. 

It is implemented as another argument in the `server.js` functions that listen for incoming HTTP requests. 

We can inspect the token, and if valid use it to make *authorization* decisions. For example, decide whether the request can be fulfilled, based on whether a specific role or claim is present. 

<br>

### Text content

...for viewing in a browser or app, multi-language, database-stored 

*Please think about the following, and then we'll discuss in class.* 

We know that one of the functions of the user (smartphone) app is to display information or content. The content is HTML text, because it will be displayed by a rendering engine that expects HTML. 

How should that content be authored and stored? This is a key question. For us, there are two choices:
1. Content is stored as separate resources in the file system of the app domain 
2. Content is stored in a database 

For this app, we are suggesting #2, database storage. Benefits include:
* Content authors do not need web programming skills 
* The technical burden of app updates and maintenance is lower 
* A little easier to create and maintain multiple language versions of a specific piece of content

The implications of this approach (which are not necessarily weaknesses) include:
* A content editor app (at the server) is needed to permit content editing 
* The approach used to fetch and then cache locally (in the PWA app) is a bit different than for separate resources in the file system 

In effect, we're building a very simple content management system (CMS). 

How would this work? Consider or envision this scenario:

* A React component's markup includes or references two or three other child components

* In each of the child components, its `componentDidMount()` function will fetch a piece of content by the content's identifier, and then render the content

In our web service app, we don't have to worry much about this - we just have to implement the CRUD methods for the content entity. A few comments:

* The ability to read ("get") a content item will likely be fairly open

* Some items could be completely open to all users, including unauthenticated public/anonymous users 

  * For example, the end user app could be used by someone who does not have a user account 

* Other items could be open only to (for examples) volunteers, or leaders (and so on) 

* The ability to edit ("post", "put", "delete") a content item will be restricted to requests that include a "contentEditor" role (or similar)

As a result, we need to consider these comments in the text content entity design. 

#### Text content entity design

To enable this approach, we must design an entity for the text content. At this point in time, we suggest at least the following (are we missing anything?):

Property | Data type | Comments
--- | --- | ---
[slug](https://en.wikipedia.org/wiki/Clean_URL#Slug) | string | Enables us to use an understandable string in our code instead of an opaque identifier 
title | string | Human-readable string for the browser tab (if the content is being viewed in a browser)
language | string | ISO standard code that indicates the content's language 
timestamp | string | The content revision date-and-time, as an ISO 8601 string
visibility<br>(or audience) | array<br>(strings) | Empty (for anonymous), or one or more roles; defines which requests can get/fetch/read the document
content | string | The content, as HTML

<br>

### Media content

*...for above, probably stored in the file system (or equivalent)*

We know that a browser (or a browser-like component) renders HTML text content. We also know that it will render an image or photo (or some other kind of non-text media item). 

The `<img />` element causes the browser to perform another request for the `src` attribute's value, which is typically an absolute URL or relative URL segment. 

Where should the media item be stored? We have choices:
* File system: Media items are in the file system, within the URL namespace of the web app.
* Persistent store (i.e. database): Media items are in the persistent store (i.e. the database). 
* Hybrid combination: A media item is in the file system, but its metadata is in the persistent store. 

There are many opinions about the best approach. However, for us, we suggest that we use the *file system* approach for this project, because it is simpler to use and maintain. 

Looking ahead to the end user (PWA) app, we just ensure that the folder/directory that holds the media items is cached on the device. That will enable requests to succeed while offline. 

#### Name of media item

This is an important topic. As you know, we typically store media items in a named folder/directory (e.g. images) in the file system. Obviously, each item must be unique. 

An item name can be meaningful (and convey information about the item) or opaque (some other identifier without meaning), or a combination of the two. 

Assume that we have a scenario where we have obtained two different images of (for example) a kitten, and both kitten images are named `kitten.png`. Now, we want to save/store them. How do we do that?
* The first image gets saved as `kitten.png` 
* The second image must have its name edited before being saved, and perhaps ends up as `kitten2.png` or some variation of that

This now becomes an additional task to be done by the content editor, and as a result, requires some thought and intervention. 

Maybe we can enable the [companion browser app](#companion-browser-app-to-manage-the-web-api) (from above) to help with this task. We do this by generating then adding a short (say 12 to 16 character) opaque and unique identifier, and using it as a prefix for or suffix to the original media item file name. For example, the above kitten images would end up similar to the following: 
* `ddb9cec491fd-kitten.png`
* `711e616cca50-kitten.png`

This approach preserves the original item filename, but now makes it possible to uniquely identify and use different items. 

<br>

### List/directory

*...of ICVA people (volunteers, leaders, etc.)*

We suspect that it would be a good idea to have a list or directory of all ICVA people. This would enable a number of administrative and also in-the-field information and safety needs. Some essential properties could include:

Property | Data type | Comments
--- | --- | ---
userName | string | Formatted as an email address
familyName | string | 
givenName | string | 
jobTitle | string | 
dateStarted | string | As an ISO 8601 string
dateTermination | string | ditto
phoneOffice | string | Includes country code
phoneMobile | string | Includes country code
phoneDevice | string | 
organization | string | Most will be ICVA
supervisor | string | Email address of supervisor
locationCountry | string | Based in this country
locationLocal | string | Based in this city/town/region

<mark>"Emergency contact" fields will probably be added to the above - <br>I have to give this some thought</mark>

With the appropriate thought, design, and implementation, it could also be used as a personal profile, so that relevant info about a person could be quickly gathered in the event of an emergency. Some additional properties could include

Property | Data type | Comments
--- | --- | ---
addressStreet | string | Street address
addressCity | string | City
addressRegion | string | Could be empty
addressCountry | string | Maybe use ISO standard country codes
addressPostal | string | Postal code
photo | string | URL or URL segment
citizenship | string | Maybe use ISO standard country codes
passportNumber | string | 
passportPhoto | string | URL or URL segment
documents | array<br>(of string) | URLs to other documents (visa, flights, etc.)
financialCards | array<br>(of string) | Bank card numbers (for cancellation)
medical | string | Info relevant to emergency medical treatment providers (allergies, eyeglasses info, etc. )

(There could be others that we need/want.)

#### Coding tasks 

We suspect that these functions would be useful for the end user app:
* Get all
* Get some (by using some filter, e.g. location, title, etc.)
* Get one

A [companion browser app](#companion-browser-app-to-manage-the-web-api) (from above) would enable a permitted user (e.g. an office admin or clerk) to perform other maintenance:
* Add new
* Edit existing
* Delete or deactivate

Obviously, all would be protected (i.e. would require authorization). 

<br>

### Alerts

*...news, announcements, notices, events; anything that is to be received by all or by named groups only*

This data is content that's similar to the "page" content above, but it's different enough to deserve its own database collection. 

Similarities include the fact that the content will be HTML text, and a few other properties. The differences are in the usage, as well as the desirability of a few other properties. 

Here's what the entity could look like:

Property | Data type | Comments
--- | --- | ---
shortName | string | Brief name of the item
category | string | Identifies whether it's an alert, a news item, etc. 
dateCreated | string | As an ISO 8601 string
dateExpired | string | Will enable filtering and other UI tasks
targetCountry | string | ISO standard country code; enables filtering
targetRegion | string | City, town, region, etc., as above
visibility<br>(or audience) | array<br>(strings) | Empty (for anonymous), or one or more roles; defines which requests can get/fetch/read the document
content | string | The content, as HTML

> Design question...  
> What about multi-language alerts, news, etc.?  
> Should we use the same design as the content collection where the same item has different versions for each language?

#### Coding tasks 

We suspect that these functions would be useful for the end user app:
* Get all active (not expired)
* Get some (by using some filter, e.g. visibility etc.)
* Get one

A [companion browser app](#companion-browser-app-to-manage-the-web-api) (from above) would enable a permitted user (e.g. an office admin or clerk) to perform other maintenance:
* Add new
* Edit existing
* Delete or deactivate

Obviously, all would be protected (i.e. would require authorization). 

<br>

### Emergency contacts 

The intention is to clearly identify emergency contacts that a volunteer could quickly access and use. 

The design of this should be discussed. Is there an advantage to having this as a separate feature? Alternatively, one idea is that this info could be provided by a content page. If we did that, then maybe we can add one more property to the content entity: 

Property | Data type | Comments
--- | --- | ---
usage | string | The intended usage (e.g. info, support, emergency, etc.)

Then, creating an "emergency contact" page/document would be as easy as creating another content item. 

<br>

### Location tracking

This would be considered a safety feature, and not a surveillance feature. 

The idea is that an authorized user (volunteer, or volunteer leader, or office worker) could use a browser app to locate or track a volunteer if they are considered or reported missing or out-of-contact. 

If this feature desired, another entity would be designed to accumulate location info. 

Property | Data type | Comments
--- | --- | ---
identifier | string | Identifies the person or device (clearly, or by obfuscating the person or device)
timestamp | string | An ISO 8601 string
location | object | GPS coordinates as reported by the device

#### Coding tasks

We suspect that these functions would be useful for a  [companion browser app](#companion-browser-app-to-manage-the-web-api) (from above), for a permitted or authorized user:
* Get all last known location
* Get some (by using some filter)
* Get one, last known location
* Get one, last "x" hours or days

<br>

### App usage logging

As discussed, it may be useful to track app feature usage. We'll leave this for now, but the idea is to create a component that would record how the app is used. This would enable developers and the client/sponsor leader(s) to identify usage patterns, with the goal to making the app better to use in the future. 

<br>

### Summary

While this specification may seem lengthy and daunting, it appears that there is a reasonable amount of work to be done. 

In summary, it appears that we would need these database entities:
* User accounts 
* Content (HTML) for the user interface 
  * Including non-text media item content
* List or directory of ICVA people
* Alerts, news, etc. items

And, in summary, it appears that we need web service code (`server.js` and `manager.js` etc.) for these tasks: 
* User account interactions (create account, login)
* Content management 
* List/directory (of people) management
* Alert, news (etc.) item management

<br>
