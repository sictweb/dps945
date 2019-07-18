---
title: Task - security intro
layout: default
---

## Add security to a web service

The goal of this task is to add the security components to the DEN app that you created last week.

Follow the guidance in the [notes](security-intro), and use the code provided. 

Do the work locally for now (in other words, you do not have to host it somewhere). 

<br>

### More info 

One of the tasks is to create a new collection in MongoDB to hold user accounts. We suggest the following schema properties: 

Key name | Data type | Comments
--- | --- | ---
userName | string | Formatted as an email address
fullName | string | 
password | string | Initially an empty string
statusActivated | boolean | Initially false, but true after an account is created or re-activated 
statusLocked | boolean | Initially false, but true after lock-out action is done
role | string | A role claim 
claims | array of strings | Initially empty, can be used to accumulate claims

<br>

#### Testing

Use Postman to test your work, by following the guidance suggested [in the notes](https://bti425.ca/notes/security-add-to-server#how-to-protect-a-routefunction-in-serverjs). 

<br>
