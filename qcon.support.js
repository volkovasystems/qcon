"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "qcon",
              			"path": "qcon/qcon.js",
              			"file": "qcon.js",
              			"module": "qcon",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/qcon.git",
              			"test": "qcon-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Query constructor.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"fname": "fname",
              			"fnamed": "fnamed",
              			"protype": "protype",
              			"pyp": "pyp",
              			"wauker": "wauker"
              		}
              	@end-include
              */

var falzy = require("falzy");
var fname = require("fname");
var fnamed = require("fnamed");
var protype = require("protype");
var pyp = require("pyp");
var wauker = require("wauker");

var qcon = function qcon(entity, blueprint) {
	/*;
                                             	@meta-configuration:
                                             		{
                                             			"entity:required": [
                                             				"function",
                                             				"object"
                                             			],
                                             			"blueprint": [
                                             				"function",
                                             				"string"
                                             			]
                                             		}
                                             	@end-meta-configuration
                                             */

	if (falzy(entity) || !protype(entity, FUNCTION + OBJECT)) {
		throw new Error("invalid entity");
	}

	if (falzy(blueprint) || !protype(blueprint, FUNCTION + STRING)) {
		throw new Error("invalid blueprint");
	}

	blueprint = fname(blueprint);

	return pyp(wauker(entity), function (constructor) {return fnamed(constructor, blueprint);});
};

module.exports = qcon;

//# sourceMappingURL=qcon.support.js.map