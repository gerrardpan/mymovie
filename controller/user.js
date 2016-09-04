var express = require("express");
//var http = require("http");
var mongoose = require("mongoose");
var path = require("path");
var models = require("../modules");



var user = models.user;


exports.Login = function(req,res){

	    var getdata = "";
	    req.addListener("data",function(datachunck){
		    getdata += datachunck;
	    });
	    req.addListener("end",function(datachunck){
		    console.log(getdata+" get from c");
		    var getuser = JSON.parse(getdata);

		    user.findOne({uname:getuser.name},function(err,doc){
		    	console.log(doc);
			    if(err)
				   console.log(err+" err ");
			if(doc){
				req.session.user = doc;
				var senduser = JSON.stringify(doc);
			    console.log(req.session.user+"data");
			    res.send(senduser);
		    };	
		});
	});
};