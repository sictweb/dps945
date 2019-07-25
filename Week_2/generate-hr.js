
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

// ################################################################################
// Hypermedia representation packaging function

function package(incomingData, path) {

  // IMPORTANT - Edit the identifier property name (lines 59 and 82)
  // Some data sources use "id" as the name
  // However, it's different in MongoDB
  // Its identifier property is "_id" (which is different from "id" or "ID" etc.)

  // Package is an object with these key-value pairs:
  // timestamp  string                 Current date-and-time, as an ISO 8601 string
  // version    string                 Version number identifier (for future use)
  // links      array of link objects  Package-level controls
  // count      number                 Item count being returned
  // data       array of item(s)       Data items, each one includes a "links" collection

  // Common tasks:
  // Add package metadata

  let now = new Date();
  let pkg = {
    timestamp: now.toISOString(),
    version: '1.0.0',
  };

  // Determine if the incoming data is an object or an array
  const isItem = (incomingData.length == undefined);

  // Make a local copy of the incoming data
  // Must do this to break the Mongoose schema prototype dependency
  let data = JSON.parse(JSON.stringify(incomingData));

  if (isItem) {

    // Item tasks:
    // Package links will have self and collection
    // Item links will have self and collection
    // Incoming data is put into an array and added to the package

    pkg.links = [{ href: `${path}/${data.id}`, rel: 'self' }, { href: path, rel: 'collection' }];
    pkg.count = 1;
    data.links = [{ href: `${path}/${data.id}`, rel: 'self' }, { href: path, rel: 'collection' }];
    pkg.data = [data];

  } else {

    // Collection tasks:
    // Package links will have self only
    // Item links will have self for each item, generated 

    pkg.links = [{ href: path, rel: 'self' }];
    pkg.count = data.length;

    // For each syntax
    /*
    data.forEach(e => {
      e.links = [{ href: `${path}/${e.id}`, rel: 'self' }, { href: path, rel: 'collection' }];
    });
    pkg.data = data;
    */

    // Map and spread syntax
    pkg.data = data.map(e => ({ ...e, links: [{ href: `${path}/${e.id}`, rel: 'self' }, { href: path, rel: 'collection' }] }));
  }

  return pkg;
}

// Show results
//console.log(package(data[2], '/api/users'));
//console.log(package(data, '/api/users'));
