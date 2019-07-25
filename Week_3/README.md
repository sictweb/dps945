## Week 3 code examples

Reminder... apps posted here do not have the `node_modules` folder.  

To rebuild the folder, run the following command while in the directory/folder that has the `package.json` file:

```
npm i
```

<br>

### Rich text editor

This is a single HTML document that has some linked resources, including the excellent CKEditor plug-in. 

If you want to use its idea and implementation, you now have an easy way of generating nicely-formatted HTML markup for the content collection of the course's web service project. 

> Please note that this code does not permanently save any data. 

<br>

### Updated security bits

In this folder, you will find much better quality versions than what you have worked with in the past in BTI425 or WEB422. I would strongly recommend that you use this code in your web service, as it now does all the right things. (Older versions were missing some key features and data.) 

Here's a guide to what's included here:

`server.js`
* A copy of the code in the "Templates and solutions" folder

`security-setup.js`
* The security environment setup code 
* Intended to be placed near the top of `server.js` 

`requests-handle-user-account-tasks.js`
* Typical user account task handlers
* Get all and get one user accounts
* View my token (if authenticated)
* Activate and register 
* Login

`requests-data-and-security.js`
* Typical handlers when requesting data (e.g. "get all products")
* Notice the presences of the "passport.authenticate..." function call

`requests-handle-roles-and-claims.js`
* Code that enables you to make decisions based on claims
* Includes different scenarios

<br>
