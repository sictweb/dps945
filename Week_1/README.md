## Week 1 code examples

All code examples on this repository are missing the `node_modules` folder. Why? To reduce the size, and maintain the fast speed of the repository download. (Each app's `node_modules` folder often has 200MB to 300MB of content, so the total repository download size can quickly add up to a big number.)

The `node_modules` folder can be easily re-created on your computer. Run this command while in the directory/folder that has the `package.json` file:

```
npm i
```

<br>

### Web API, one entity, in-memory data

Data is NOT persisted; it is in a simple in-memory array  
Single entity, get all (`/api/items`), get one (`/api/items/:itemId`)  
Also supports HTTP POST, PUT, and DELETE  
Use Postman to interact with the web service

Run this with the command:  
`node server.js` 

<br>
