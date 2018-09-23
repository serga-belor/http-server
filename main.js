const http = require("http");

const port = 33333;
const version = "0.0.0.1";

http.createServer( function( req, res ) {
    const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch( path ) {
    case "":
        res.writeHead( 200, { "Content-Type": "text/plane"} );
        res.end("Sergey Belorusets's server.");
        break;
    case "/about":
        res.writeHead( 200, { "Content-Type": "text/plane"} );
        res.end(`Sergey Belorusets's server.\nVersion: ${version}`);
        break;
    default:
        res.writeHead( 404, { "Content-Type": "text/plane"} );
        res.end("Not found");
        break;
}
} ).listen(port);

console.log(`Server ver. ${version} is ruuning on ${port}; press Ctrl+C to stop.`);
