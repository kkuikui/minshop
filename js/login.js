$(function(){
    //记住账号勾选效果
   $(".login-savepwd").unbind('click').click(function(e){
    e.stopPropagation();
    var ths=$(this);
    $("#autoLogin").unbind('click').click(function(e){
    if (ths.hasClass("login-not")) {
       ths.removeClass("login-not");
    }else{
      ths.addClass("login-not");
    }   
  });
  });
    //显示密码效果
    $(".login-showpwd").unbind('click').click(function(e){
        e.stopPropagation();
        var _ths=$(this);
        $("#showPwd").unbind('click').click(function(e){
            if (_ths.hasClass("showpwd")) {
                _ths.removeClass("showpwd");
                _ths.prevAll(".pass-t").css("display", "none");
                _ths.prevAll(".pass-p").css("display", "block");
            }else{
                _ths.addClass("showpwd");
                _ths.prevAll(".pass-p").css("display", "none");
                _ths.prevAll(".pass-t").css("display", "block");
            }
        });
    });
    //可见密码和不可见密码互相赋值
    $(".spassword input").on("keyup", function () {
        var _ths = $(this);
        var passValue = _ths.val();
        _ths.siblings("input").val(passValue);
    });
})



