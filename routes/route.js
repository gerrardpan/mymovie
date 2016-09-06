var express = require("express");
//var http = require("http");
var mongoose = require("mongoose");
var models = require("../modules");
var cindex = require("../controller/cindex");
var user = require("../controller/user");
var movie = require("../controller/movie");

exports.routes = function(app) {
	
	// index route handle
    app.get("/",cindex.index);

    //movies route handle
    app.get("/addMovie",movie.addmovie);
    app.get("/details",movie.details);
 
    //user route handle
    app.post("/Signup",user.Signup);
    app.post("/Login",user.Login);   
}; 