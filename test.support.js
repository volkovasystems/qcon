"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "qcon",
              			"path": "qcon/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/qcon.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"qcon": "qcon"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var qcon = require("./qcon.support.js");
//: @end-client







//: @client:
describe("qcon", function () {

	describe("`qcon( new Date( ), 'Date' )`", function () {
		it("should return constructor", function () {
			assert.equal(qcon(new Date(), "Date"), Date);
		});
	});

	describe("`qcon with instance of class C as entity and string 'B' as blueprint`", function () {
		it("should return constructor", function () {var
			A =
			function A() {(0, _classCallCheck3.default)(this, A);};var


			B = function (_A) {(0, _inherits3.default)(B, _A);
				function B() {(0, _classCallCheck3.default)(this, B);return (0, _possibleConstructorReturn3.default)(this, (B.__proto__ || (0, _getPrototypeOf2.default)(B)).call(this));}return B;}(A);var


			C = function (_B) {(0, _inherits3.default)(C, _B);
				function C() {(0, _classCallCheck3.default)(this, C);return (0, _possibleConstructorReturn3.default)(this, (C.__proto__ || (0, _getPrototypeOf2.default)(C)).call(this));}return C;}(B);


			assert.deepEqual(qcon(new C(), "B"), B);
		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicWNvbiIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsIkRhdGUiLCJBIiwiQiIsIkMiLCJkZWVwRXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLG1CQUFULENBQWI7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEJBLFVBQVUsK0JBQVYsRUFBMkMsWUFBTztBQUNqREMsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLENBQWNILEtBQU0sSUFBSUksSUFBSixFQUFOLEVBQW1CLE1BQW5CLENBQWQsRUFBMkNBLElBQTNDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFILFVBQVUsdUVBQVYsRUFBbUYsWUFBTztBQUN6RkMsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ2pDRyxJQURpQztBQUV0QyxnQkFBYyx3Q0FBRyxDQUZxQjs7O0FBS2pDQyxJQUxpQztBQU10QyxpQkFBYyw0SkFBYSxDQU5XLFdBS3ZCRCxDQUx1Qjs7O0FBU2pDRSxJQVRpQztBQVV0QyxpQkFBYyw0SkFBYSxDQVZXLFdBU3ZCRCxDQVR1Qjs7O0FBYXZDUixVQUFPVSxTQUFQLENBQWtCUixLQUFNLElBQUlPLENBQUosRUFBTixFQUFnQixHQUFoQixDQUFsQixFQUF5Q0QsQ0FBekM7QUFDQSxHQWREO0FBZUEsRUFoQkQ7O0FBa0JBLENBMUJEO0FBMkJBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicWNvblwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicWNvbi90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcWNvbi5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwicWNvblwiOiBcInFjb25cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IHFjb24gPSByZXF1aXJlKCBcIi4vcWNvbi5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcInFjb25cIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgcWNvbiggbmV3IERhdGUoICksICdEYXRlJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gY29uc3RydWN0b3JcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggcWNvbiggbmV3IERhdGUoICksIFwiRGF0ZVwiICksIERhdGUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcWNvbiB3aXRoIGluc3RhbmNlIG9mIGNsYXNzIEMgYXMgZW50aXR5IGFuZCBzdHJpbmcgJ0InIGFzIGJsdWVwcmludGBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGNvbnN0cnVjdG9yXCIsICggKSA9PiB7XG5cdFx0XHRjbGFzcyBBIHtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH07XG5cdFx0XHR9XG5cblx0XHRcdGNsYXNzIEIgZXh0ZW5kcyBBIHtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XG5cdFx0XHR9XG5cblx0XHRcdGNsYXNzIEMgZXh0ZW5kcyBCIHtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XG5cdFx0XHR9XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHFjb24oIG5ldyBDKCApLCBcIkJcIiApLCBCICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
