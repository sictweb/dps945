---
title: Hypermedia representation for a collection
layout: default
---

## Hypermedia representation for a collection

Here's an example of a a design for a hypermedia representation for a single item. 

```js
{
  "timestamp":"2019-07-09T11:27:45.907Z",
  "version":"1.0.0",
  "links":[
    {
      "href":"/api/users/3",
      "rel":"self"
    },
    {
      "href":"/api/users",
      "rel":"collection"
    }
  ],
  "count":1,
  "data":[
    {
      "id":3,
      "firstName":"Guilbert",
      "lastName":"Edser",
      "gender":"Male",
      "birthDate":"2018-05-17T06:15:37Z",
      "email":"gedser2@bbb.org",
      "web":"http://msn.com",
      "creditScore":565,
      "rating":8.26,
      "links":[
        {
          "href":"/api/users/3",
          "rel":"self"
        },
        {
          "href":"/api/users",
          "rel":"collection"
        }
      ]
    }
  ]
}
```

<br>
