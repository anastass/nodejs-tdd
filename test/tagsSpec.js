var expect = require("chai").expect;
var tags = require("../lib/tags.js");

describe("Tags", function() {
	describe("#parse()", function() {
		it("should parse long formed tags", function() {
			var args = ["--depth=4", "--hellow=world"];
			var results = tags.parse(args);

			expect(results).to.have.property("depth", 4);
			expect(results).to.have.property("hello", "world");
		})
	})

});