/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	re = require( './../lib' );


// VARIABLES //

var assert = chai.assert;


// TESTS //

describe( 'regex-dirname-posix', function tests() {

	it( 'should export a regular expression', function test() {
		assert.isTrue( re instanceof RegExp );
	});

	it( 'should capture POSIX path dirnames', function test() {
		var expected,
			values,
			dir,
			i;

		values = [
			'index.js',
			'/foo/bar/home.html',
			'/foo/bar/home',
			'foo/file.pdf',
			'./foo/file',
			'./index.js/',
			'foo/bar/home.html/',
			'.gitigno.re',
			'/foo/bar/.editorconf.ig',
			'main/.travis.yml',
			'./foo foo foo/bar bar_bar/',
			'./../../foo/bar',
			'./../../',
			'./',
			'.',
			'boop.'
		];

		expected = [
			'',
			'/foo/bar',
			'/foo/bar',
			'foo',
			'./foo',
			'.',
			'foo/bar',
			'',
			'/foo/bar',
			'main',
			'./foo foo foo',
			'./../../foo',
			'./..',
			'.',
			'.',
			''
		];

		for ( i = 0; i < values.length; i++ ) {
			dir = re.exec( values[ i ] )[ 1 ];
			assert.strictEqual( dir, expected[ i ], values[ i ] );
		}
	});

});
