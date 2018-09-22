var http = require("http");

http.createServer( function( req,res ) {
    res.writeHead( 200, { "Content-Type": "text/plane"} );
    res.end("Hello world!");
} ).listen(33333);

console.log("Server is ruuning on 33333; press Ctrl+C to stop.");
