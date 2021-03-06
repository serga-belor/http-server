/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
/* eslint-env node */

const port = 33333;
const version = "0.0.0.4";

const express = require("express");
const app = express();
app.set("port", process.env.PORT || port);

// Init handlebars
const handlebars = require("express-handlebars")
	.create( { defaultLayout: "main" } );
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

//
// process paths
//
app.get("/", function(req, res) {
	res.render("index", {
		projects: [
			{name: "Labirinth", link: "/labirinth"},
			{name: "About", link: "/about"}
		]
	});
});

app.get("/about", function(req, res) {
	res.render("about", {
		version: version
	} );
});

// labirinth project
const labirinth = require("../labirinth/express.js");
labirinth.static( express, app );
app.get("/labirinth", function(req, res, next) {
	try{
		labirinth.get( express, app, req, res );
	} catch(e) {
		console.error("!!! labirint route processor failed:" + e);
		next();
	}
});

// User page 404
app.use( function(req, res) {
	res.status(404);
	res.render("404");
});

// User page 500
app.use( function(err, req, res, next) { // eslint-disable-line no-unused-vars
	console.error(err.stack);
	res.status(500);
	res.render("500");
});

app.listen( app.get("port"), function() {
	console.log( `Server has been started on ${app.get("port")}. Press Ctrl+C to stop.` );
});
