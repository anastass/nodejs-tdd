var expect = require("chai").expect;
var tags = require("../lib/tags.js");

describe("Tags", function() {
	describe("#parse()", function() {
		it("should parse long formed tags", function() {
			var args = ["--depth=4", "--hello=world"];
			var results = tags.parse(args);

			expect(results).to.have.property("depth", 4);
			expect(results).to.have.property("hello", "world");
		});

		it("should fallback to defaults", function() {
			var args = ["--depth=4", "--hello=world"];	// define args array
			var defaults = {depth: 2, foo: "bar"};		// define defaults object
			var results = tags.parse(args, defaults);

			var expected = {
				depth: 4,
				foo: "bar",
				hello: "world"
			};

			expect(results).to.deep.equal(expected);
		});
	})

});