$(function(){
	$("#Login").click(function(event){
		$("#log").removeClass("ls_hide");
	});
	$("#Signup").click(function(event){
		$("#sign").removeClass("ls_hide");
	});
	$("#loghide").click(function(event){
		$("#log").addClass("ls_hide");
		$("#reset").click();
	});
	$("#signhide").click(function(event){
		$("#sign").addClass("ls_hide");
		$("#signreset").click();
	});
     (function(){
     	var sm = document.getElementById("logform");
     	sm.onsubmit=function(){return false;};
     })();
  	$("#logsubmit").click(function(event){
  		var user = {
  			name:"xuwei",
            pwd:"123456"
   		};
  		 user.name = $("#logName").val();
  		 user.pwd = $("#logPwd").val();
  		 var struser = JSON.stringify(user);
  		 $.post("/Login",struser,function(data){
  		 	var getuser = JSON.parse(data);
  		 	alert(getuser);
              if(!getuser){
              	alert("用户名或密码不正确！");
              	return false;
              }
              else{
              	var getuser = JSON.parse(data);
              	$("#Logout").removeClass("ls_hide");
              	$("#Login").addClass("ls_hide");
              	$("#log").addClass("ls_hide");
              }
  		 });
  		 return false;
  	});
});