/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
/* eslint-env node */

const port = 33333;
const version = "0.0.0.2";

const app = require("express")();
app.set("port", process.env.PORT || port);
 
app.get("/", function(req, res) {
	res.type("text/plain");
	res.send("Sergey Belorusets's http server");
});

app.get("/about", function(req, res) {
	res.type("text/plain");
	res.send(`Sergey Belorusets's http server version ${version}`);
});

// User page 404
app.use( function(req, res) {
	res.type("text/plain");
	res.status(404);
	res.send("404 — Not Found");
});

// User page 500
app.use( function(err, req, res, next) {
	console.error(err.stack);
	res.type("text/plain");
	res.status(500);
	res.send("500 — Server error");
});

app.listen( app.get("port"), function() {
	console.log( `Server has been started on ${app.get("port")}. Press Ctrl+C to stop.` );
});
