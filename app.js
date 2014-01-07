/*
  On Unix puth next line at the top of the script: 
    # !/usr/bin/env node

  On Windows: 
    Open Command prompt and type 'node app.js'

  Examples: 
    # to get help
    node app.js -h

    # to get all files with extension js
    node app.js -q=".js"

    # limit above query to the local directory
    node app.js -q=".js" -d

    # limit query to depth=<n>
    node app.js -q=".js" -d=<n>

    # search only in ./lib directory
    node app.js -q=".js" -p=./lib
*/

var tags = require("./lib/tags.js");
var search = require("./lib/search.js");
var defaults = {
   path: ".",
   query: "",
   depth: 2
}
var replacements = {
   p: "path",
   q: "query",
   d: "depth",
   h: "help"
}

tags = tags.parse(process.argv, defaults, replacements);

if (tags.help) {
   console.log("Usage: ./app.js -q=query [-d=depth] [-p=path]");
} else {
   search.scan(tags.path, tags.depth, function(err, files) {
       search.match(tags.query, files).forEach(function(file){
           console.log(file);
       });
   });
}