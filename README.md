nodejs-tdd
==========

Code based on Testing in Node.js by Gabriel Manricks (Nettuts+)

### Required:

	npm install -g mocha
	npm install chai

### To run unit tests:

	Open command prompt and type
		mocha

	Tip: Use 'mocha -w' to run the tests automatically when a file is changed.

### To run/debug tags.js:

	1. Create calling module, for example:

		[main.js]
		var tags = require("./lib/tags.js");

		var args = ["-sd=4", "-h"];
		var replacements = {
			s: "searchContents",
			d: "depth",
			h: "hello"
		};
		console.log(args);
		console.log(replacements);

		var results = tags.parse(args, {}, replacements);
		console.log(results);

	2. and run it with
		node main.js

	3. ... or debug it with 
		node debug main.js

### Links:

- [Testing in Node.js](http://net.tutsplus.com/tutorials/javascript-ajax/testing-in-node-js/) by Gabriel Manricks (Nettuts+)