$(function(){

    function islogin(){
      var user = sessionStorage.getItem("user");
      if(user)
      {
        $("#tohide").addClass("ls_hide");
        $("#head_log").removeClass("ls_hide");
            $("#log_show").addClass("ls_hide");
            $("#user_link").text(user);
      }
    }
    islogin();

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
  
  $("#Logout").click(function(event){
    sessionStorage.removeItem("user");
    alert(sessionStorage.getItem("user"));
    location.reload();
    return false;
  });
     (function(){
     	var sm = document.getElementById("logform");
     	sm.onsubmit=function(){return false;};
      var sim = document.getElementById("signform");
      sim.onsubmit=function(){return false;};
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
        var getnouser = "!null";
  		 	//var getuser = JSON.parse(data);
              if(data === getnouser){
              	alert("用户名或密码不正确！");
              	return false;
              }
              else{
              	var getuser = JSON.parse(data);
                var suser = getuser["uname"];
                alert(suser);
                sessionStorage.setItem("user",suser);
                //alert(sessionStorage.getItem("user")+"sessionStorage");
              	$("#head_log").removeClass("ls_hide");
                $("#user_link").text(suser);
              	$("#Login").addClass("ls_hide");
              	$("#log").addClass("ls_hide");
                $("#log_show").addClass("ls_hide");
                $("#loghide").click();
              }
  		 });
  		 return false;
  	});

  $("#signsubmit").click(function(event){
    alert("sign click");
            var user = {
              name:"",
              pwd:""
      };
       user.name = $("#signName").val();
       user.pwd = $("#signPwd").val();
       var cp = $("#confirmPwd").val();
       if(cp !== user.pwd)
       {
        alert("两次输入密码值不相同！");
          $("#confirmPwd").val("");
         return false;
       }
       var struser = JSON.stringify(user);
       alert(struser);
       $.post("/Signup",struser,function(data){
             alert("send data ");
             var getnouser = "user_already_have";
        //var getuser = JSON.parse(data);
              if(data === getnouser){
                alert("用户名已存在");
                $("#signName").val("");
                return false;
              }
              else{
                alert("注册成功");
                $("#signhide").click();
                /*
                var getuser = JSON.parse(data);
                var suser = getuser["uname"];
                alert(suser);
                sessionStorage.setItem("user",suser);
                //alert(sessionStorage.getItem("user")+"sessionStorage");
                $("#head_log").removeClass("ls_hide");
                $("#user_link").text(suser);
                $("#Login").addClass("ls_hide");
                $("#log").addClass("ls_hide");
                $("#log_show").addClass("ls_hide");
                $("#loghide").click();*/
              }
       });
       return false;
  });
});