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

	Tip: Use node-inspector for debugging
		# install node inspector
		npm install -g node-inspector

		# run it and visit suggested link to debug 'http://127.0.0.1:8080/debug?port=5858' in Chrome
		node-inspector

		# run the code you want to debug and refresh the browser
		node --debug-brk app.js -dq=".js" -p=./lib


### Links:

- [Testing in Node.js](http://net.tutsplus.com/tutorials/javascript-ajax/testing-in-node-js/) by Gabriel Manricks (Nettuts+)
- [Node.js debugger](https://github.com/node-inspector/node-inspector) based on Blink Developer Tools
- [40+ Resources for the Node.js Developer](http://architects.dzone.com/articles/40-resources-nodejs-developer)

- [nodejs snippets and bindings for Sublime Text 2](https://github.com/tanepiper/SublimeText-Nodejs)
- [node-inspector](https://github.com/node-inspector/node-inspector)