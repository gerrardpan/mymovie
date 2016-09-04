var express = require("express");

exports.index  = function(req,res){
    	console.log("home \n");
	    res.render("index.jade");
    };

