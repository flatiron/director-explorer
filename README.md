# director-explorer

Tools for exploring <a href="http://github.com/flatiron/director">Director</a> routers.

# Features

 - Can currently output a plain-text view of a `Director.Router` instance

# Installation

     npm install director-explorer

# Usage

``` js
var de       = require('director-explorer'),
    director = require('director');

var router = new director.http.Router();

// simple noop for demo
var n = function(){};

router.get('/', n);

router.path('/users/:id', function(){
  this.post(n);   
  this.get(n);    
  this.delete(n); 
  this.put(n);    
  this.path('/dongles', function(){
    this.get(n);
    this.post(n);
  })
})

console.log(de.table(router));

/* 

  OUTPUTS:

    GET     / 
    POST    /users/([._a-zA-Z0-9-]+) 
    GET     /users/([._a-zA-Z0-9-]+) 
    DELETE  /users/([._a-zA-Z0-9-]+) 
    PUT     /users/([._a-zA-Z0-9-]+) 
    GET     /users/([._a-zA-Z0-9-]+)/dongles 
    POST    /users/([._a-zA-Z0-9-]+)/dongles 

*/

```

# TODO

 - Add HTML view with collapsable menus
 - Add WSDL view
 - Create director-client project for auto-generated director clients
 - Create html demo forms and auto-documentation for director routers
