'use strict';

var re = require( './../lib' );

var dir;

dir = re.exec( 'index.js' )[ 1 ];
console.log( dir );
// returns ''

dir = re.exec( '.' )[ 1 ];
console.log( dir );
// returns '.'

dir = re.exec( './' )[ 1 ];
console.log( dir );
// returns '.'

dir = re.exec( '/foo/bar/home.html' )[ 1 ];
console.log( dir );
// returns '/foo/bar'

dir = re.exec( 'foo/file.pdf' )[ 1 ];
console.log( dir );
// returns 'foo'

dir = re.exec( 'beep.' )[ 1 ];
console.log( dir );
// returns ''

dir = re.exec( '' )[ 1 ];
console.log( dir );
// returns ''

dir = re.exec( '/foo/bar/file' )[ 1 ];
console.log( dir );
// returns '/foo/bar'

dir = re.exec( './foo/bar/.gitignore' )[ 1 ];
console.log( dir );
// returns './foo/bar'
