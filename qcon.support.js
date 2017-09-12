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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFjb24uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJmbmFtZSIsImZuYW1lZCIsInByb3R5cGUiLCJweXAiLCJ3YXVrZXIiLCJxY29uIiwiZW50aXR5IiwiYmx1ZXByaW50IiwiRlVOQ1RJT04iLCJPQkpFQ1QiLCJFcnJvciIsIlNUUklORyIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFNBQVNGLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUcsVUFBVUgsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUksTUFBTUosUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNSyxTQUFTTCxRQUFTLFFBQVQsQ0FBZjs7QUFFQSxJQUFNTSxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsTUFBZixFQUF1QkMsU0FBdkIsRUFBa0M7QUFDOUM7Ozs7Ozs7Ozs7Ozs7OztBQWVBLEtBQUlULE1BQU9RLE1BQVAsS0FBbUIsQ0FBQ0osUUFBU0ksTUFBVCxFQUFpQkUsV0FBV0MsTUFBNUIsQ0FBeEIsRUFBOEQ7QUFDN0QsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlaLE1BQU9TLFNBQVAsS0FBc0IsQ0FBQ0wsUUFBU0ssU0FBVCxFQUFvQkMsV0FBV0csTUFBL0IsQ0FBM0IsRUFBb0U7QUFDbkUsUUFBTSxJQUFJRCxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVESCxhQUFZUCxNQUFPTyxTQUFQLENBQVo7O0FBRUEsUUFBT0osSUFBS0MsT0FBUUUsTUFBUixDQUFMLEVBQXVCLFVBQUVNLFdBQUYsVUFBbUJYLE9BQVFXLFdBQVIsRUFBcUJMLFNBQXJCLENBQW5CLEVBQXZCLENBQVA7QUFDQSxDQTNCRDs7QUE2QkFNLE9BQU9DLE9BQVAsR0FBaUJULElBQWpCIiwiZmlsZSI6InFjb24uc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicWNvblwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicWNvbi9xY29uLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJxY29uLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInFjb25cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3Fjb24uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJxY29uLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0UXVlcnkgY29uc3RydWN0b3IuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiZm5hbWVcIjogXCJmbmFtZVwiLFxuXHRcdFx0XCJmbmFtZWRcIjogXCJmbmFtZWRcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicHlwXCI6IFwicHlwXCIsXG5cdFx0XHRcIndhdWtlclwiOiBcIndhdWtlclwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBmbmFtZSA9IHJlcXVpcmUoIFwiZm5hbWVcIiApO1xuY29uc3QgZm5hbWVkID0gcmVxdWlyZSggXCJmbmFtZWRcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCBweXAgPSByZXF1aXJlKCBcInB5cFwiICk7XG5jb25zdCB3YXVrZXIgPSByZXF1aXJlKCBcIndhdWtlclwiICk7XG5cbmNvbnN0IHFjb24gPSBmdW5jdGlvbiBxY29uKCBlbnRpdHksIGJsdWVwcmludCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwib2JqZWN0XCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJibHVlcHJpbnRcIjogW1xuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcInN0cmluZ1wiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggZW50aXR5ICkgfHwgIXByb3R5cGUoIGVudGl0eSwgRlVOQ1RJT04gKyBPQkpFQ1QgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdH1cblxuXHRpZiggZmFsenkoIGJsdWVwcmludCApIHx8ICFwcm90eXBlKCBibHVlcHJpbnQsIEZVTkNUSU9OICsgU1RSSU5HICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBibHVlcHJpbnRcIiApO1xuXHR9XG5cblx0Ymx1ZXByaW50ID0gZm5hbWUoIGJsdWVwcmludCApO1xuXG5cdHJldHVybiBweXAoIHdhdWtlciggZW50aXR5ICksICggY29uc3RydWN0b3IgKSA9PiBmbmFtZWQoIGNvbnN0cnVjdG9yLCBibHVlcHJpbnQgKSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBxY29uO1xuIl19
//# sourceMappingURL=qcon.support.js.map
