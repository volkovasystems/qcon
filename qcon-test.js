
const assert = require( "assert" );
const qcon = require( "./qcon.js" );

assert.equal( qcon( new Date( ), "Date" ), Date, "should be equal to Date" );

class A {
	constructor( ){ };
}

class B extends A {
	constructor( ){ super( ); }
}

class C extends B {
	constructor( ){ super( ); }
}

assert.equal( qcon( new C( ), "B" ), B, "should be equal to B" );

console.log( "ok" );
