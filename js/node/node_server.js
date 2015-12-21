/**
 *
 *  node_server.js
 *  author: michael misran
 *  date creation: 20/12/2015
 *  last update: 20/12/2015
 *
**/

var http = require( 'http' );
var url = require( 'url' );

var server = http.createServer( function( req, res ) {
    var page = url.parse( req.url ).pathname;
    console.log( page );

    res.writeHead( 200, {"Content-Type": "text/html"} );

    if( page == '/' ) {
        res.write( '<b>Holil studio</b> accueil' );
    }else{
        res.write( '<b>Holil studio</b> dream and reality' )
    }

    res.end();
} );

server.listen( 8080 );