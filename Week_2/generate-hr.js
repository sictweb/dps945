
// If you wish, you can use this collection of five "users" or "people" as your data source

// Data
var data = [{ "id": 1, "firstName": "Reagen", "lastName": "Lincke", "gender": "Male", "birthDate": "2018-01-17T10:09:55Z", "email": "rlincke0@virginia.edu", "web": "https://virginia.edu", "creditScore": 629, "rating": 15.03 },
{ "id": 2, "firstName": "Samuele", "lastName": "Branchflower", "gender": "Male", "birthDate": "2018-01-25T11:38:22Z", "email": "sbranchflower1@prweb.com", "web": "http://digg.com", "creditScore": 658, "rating": 15.68 },
{ "id": 3, "firstName": "Guilbert", "lastName": "Edser", "gender": "Male", "birthDate": "2018-05-17T06:15:37Z", "email": "gedser2@bbb.org", "web": "http://msn.com", "creditScore": 565, "rating": 8.26 },
{ "id": 4, "firstName": "Waldon", "lastName": "Morgen", "gender": "Male", "birthDate": "2018-03-02T09:53:29Z", "email": "wmorgen3@dailymail.co.uk", "web": "http://usnews.com", "creditScore": 742, "rating": 15.59 },
{ "id": 5, "firstName": "Megen", "lastName": "Gabbett", "gender": "Female", "birthDate": "2018-11-21T09:29:49Z", "email": "mgabbett4@toplist.cz", "web": "https://mysql.com", "creditScore": 319, "rating": 2.67 }];

// Show one item
//console.log(JSON.stringify(data[3]));

// Show all items
//console.log(JSON.stringify(data));

// Function will accept incoming info and return a JavaScript object

function package(data, path) {

  // Incoming info:
  // data       object or array        The data to be packaged 
  // path       string                 The base path segment to the entity collection URL

  // Package is an object with these key-value pairs:
  // timestamp  string                 Current date-and-time, as an ISO 8601 string
  // version    string                 Version number identifier (for future use)
  // links      array of link objects  Package-level controls
  // count      number                 Item count being returned
  // data       array of item(s)       Data items, each one includes a "links" collection

  // The function will return an object
  // The data will be packaged inside
  // The caller will then run the package through JSON.stringify()

  // First task, create an object that will be the package
  // Add the known metadata (i.e. timestamp, version)

  // Determine if the incoming data is an object or an array, then...

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

  // At the end, return the packaged data as a JavaScript object
  // (but not as JSON - leave that task to the caller)

}

// Show results
//console.log(package(data[2], '/api/users'));
//console.log(package(data, '/api/users'));
