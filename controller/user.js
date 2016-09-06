var express = require("express");
//var http = require("http");
var mongoose = require("mongoose");
var path = require("path");
var models = require("../modules");



var user = models.user;

exports.Signup = function(req,res){
	console.log("route to Signup succ");
	var getdata = "";
	req.addListener("data",function(chunk){
		getdata +=chunk;
	});
	req.addListener("end",function(datachunk){
		console.log(getdata+"sign data fc");
		var getuser = JSON.parse(getdata);
		var newuser = new user({
			uname:getuser.name,
			upwd:getuser.pwd
		});
		user.findOne({uname:getuser.name},function(err,doc){
			if(!doc)
			{
		        newuser.save(function(err){
			       console.log(err);
		        });
		        console.log("Signup succ");
		        res.send("true");
			}
			else{
				console.log("Signup false");
				res.send("user_already_have");
			}
		});

	});
};

exports.Login = function(req,res){

	    var getdata = "";
	    req.addListener("data",function(datachunck){
		    getdata += datachunck;
	    });
	    req.addListener("end",function(datachunck){
		    console.log(getdata+" get from c");
		    var getuser = JSON.parse(getdata);

		    user.findOne({uname:getuser.name,upwd:getuser.pwd},function(err,doc){
		    	console.log(doc);
			    if(err)
				   console.log(err+" err ");
			if(doc){
				req.session.user = doc;
				var senduser = JSON.stringify(doc);
			    console.log(req.session.user+"data");
			    res.send(senduser);

		    }else{
		    	//console.log(doc["pwd"]);
		    	var getnouser = "!null";
		    	res.send(getnouser);    	
		    }	
		});
	});
};