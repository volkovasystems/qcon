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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFjb24uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJmbmFtZSIsImZuYW1lZCIsInByb3R5cGUiLCJweXAiLCJ3YXVrZXIiLCJxY29uIiwiZW50aXR5IiwiYmx1ZXByaW50IiwiRlVOQ1RJT04iLCJPQkpFQ1QiLCJFcnJvciIsIlNUUklORyIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFNBQVNGLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUcsVUFBVUgsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUksTUFBTUosUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNSyxTQUFTTCxRQUFTLFFBQVQsQ0FBZjs7QUFFQSxJQUFNTSxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsTUFBZixFQUF1QkMsU0FBdkIsRUFBa0M7QUFDOUM7Ozs7Ozs7Ozs7Ozs7OztBQWVBLEtBQUlULE1BQU9RLE1BQVAsS0FBbUIsQ0FBQ0osUUFBU0ksTUFBVCxFQUFpQkUsV0FBV0MsTUFBNUIsQ0FBeEIsRUFBOEQ7QUFDN0QsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlaLE1BQU9TLFNBQVAsS0FBc0IsQ0FBQ0wsUUFBU0ssU0FBVCxFQUFvQkMsV0FBV0csTUFBL0IsQ0FBM0IsRUFBb0U7QUFDbkUsUUFBTSxJQUFJRCxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVESCxhQUFZUCxNQUFPTyxTQUFQLENBQVo7O0FBRUEsUUFBT0osSUFBS0MsT0FBUUUsTUFBUixDQUFMLEVBQXVCLFVBQUVNLFdBQUYsVUFBbUJYLE9BQVFXLFdBQVIsRUFBcUJMLFNBQXJCLENBQW5CLEVBQXZCLENBQVA7QUFDQSxDQTNCRDs7QUE2QkFNLE9BQU9DLE9BQVAsR0FBaUJULElBQWpCIiwiZmlsZSI6InFjb24uc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJxY29uXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInFjb24vcWNvbi5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJxY29uLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwicWNvblwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9xY29uLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJxY29uLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0UXVlcnkgY29uc3RydWN0b3IuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwiZm5hbWVcIjogXCJmbmFtZVwiLFxyXG5cdFx0XHRcImZuYW1lZFwiOiBcImZuYW1lZFwiLFxyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXHJcblx0XHRcdFwicHlwXCI6IFwicHlwXCIsXHJcblx0XHRcdFwid2F1a2VyXCI6IFwid2F1a2VyXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IGZuYW1lID0gcmVxdWlyZSggXCJmbmFtZVwiICk7XHJcbmNvbnN0IGZuYW1lZCA9IHJlcXVpcmUoIFwiZm5hbWVkXCIgKTtcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcbmNvbnN0IHB5cCA9IHJlcXVpcmUoIFwicHlwXCIgKTtcclxuY29uc3Qgd2F1a2VyID0gcmVxdWlyZSggXCJ3YXVrZXJcIiApO1xyXG5cclxuY29uc3QgcWNvbiA9IGZ1bmN0aW9uIHFjb24oIGVudGl0eSwgYmx1ZXByaW50ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFx0XCJvYmplY3RcIlxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0XCJibHVlcHJpbnRcIjogW1xyXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFx0XCJzdHJpbmdcIlxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIGVudGl0eSApIHx8ICFwcm90eXBlKCBlbnRpdHksIEZVTkNUSU9OICsgT0JKRUNUICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggZmFsenkoIGJsdWVwcmludCApIHx8ICFwcm90eXBlKCBibHVlcHJpbnQsIEZVTkNUSU9OICsgU1RSSU5HICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGJsdWVwcmludFwiICk7XHJcblx0fVxyXG5cclxuXHRibHVlcHJpbnQgPSBmbmFtZSggYmx1ZXByaW50ICk7XHJcblxyXG5cdHJldHVybiBweXAoIHdhdWtlciggZW50aXR5ICksICggY29uc3RydWN0b3IgKSA9PiBmbmFtZWQoIGNvbnN0cnVjdG9yLCBibHVlcHJpbnQgKSApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBxY29uO1xyXG4iXX0=
//# sourceMappingURL=qcon.support.js.map
