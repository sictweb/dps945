## Week 7 code examples

Reminder... apps posted here do not have the `node_modules` folder.  

To rebuild the folder, run the following command while in the directory/folder that has the `package.json` file:

```
npm i
```

<br>

### Login code

In this folder, you will find Rafael Ungar's code for a login component etc. He is sharing for the benefit of all teams, and you are welcome to use it in whole or in part in your project. 

Here's a guide to what's included here:

`server.js`
* Updated code to handle CORS 

`login.js`
* A React component
* Edit it to use your team's web API
* And edit - if necessary - to localize and/or match your app's visual appearance/style

`tokenview.js`
* A React component
* Shows how to *decode the token* - it requires the `jwt-decode` package
* The shape of the decoded token will match the code in your team's web API "login" function
* Therefore, you can get the `roles` property value (an array of strings),<br>and/or the `claims` property value (an array of custom claims)
* Then, use this data to make access control decisions

<br>
