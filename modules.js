var mongoose = require("mongoose");
 var schema = mongoose.Schema;
  var user = new schema({
  	uid:Number,
  	uname:String,
  	upwd:String
  });
  var movie = new schema({
    mId:String,
  	mName:String,
  	mType:String,
    mActor:String,
    mDoctor:String,
    mPulYear:String,
    mPf:String,
    mSumary:String
  });
  exports.user = mongoose.model("user",user);
  exports.movie = mongoose.model("movie",movie);