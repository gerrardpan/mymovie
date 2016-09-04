var express = require("express");
//var http = require("http");
var mongoose = require("mongoose");
var path = require("path");
var models = require("./modules");
var jade = require("jade");

var user = models.user;
var movie = models.movie;
var app = express();
var route = require("./routes/route");

app.use(express.cookieParser());
app.use(express.session({
	secret:"mymovie",
}));
app.set("views", "./views");
app.set("view engine", "jade");
app.use(express.static(__dirname + "/public"));
route.routes(app);

mongoose.connect("mongodb://localhost/mymovie");


app.listen(3000);
console.log("server start at port 3000....");