var express = require("express");
var mongoose = require("mongoose");
var models = require("../modules");

var movie = models.movie;

exports.addmovie = function(req,res){

       res.render("addMovie.jade");
    };

exports.details = function(req,res){

	    movie.findOne({mName:"Capteam America"},function(err,doc){
	    	
		console.log(req.session.user+"read session");
	    res.render("details.jade",doc);

	  });
    };