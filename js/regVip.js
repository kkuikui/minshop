$(function(){
    //记住账号勾选效果
    $(".reg-labelCheckbox").unbind('click').click(function(e){
        e.stopPropagation();
        var ths=$(this);
        $("#autoAgr").unbind('click').click(function(e){
            if (ths.hasClass("reg-not")) {
                ths.removeClass("reg-not");
            }else{
                ths.addClass("reg-not");
            }
        });
    });

    var h=/^[\u4e00-\u9fa5]{0,}$/;
    var d=/^1[34578]\d{9}$/;
    var y=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    var passW = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
    function regt(name,value,rInfo,eInfo){
        $(".form-item input[name="+ name +"]").blur(function() {
            var _tx = $(this),
                v= _tx.val();
            if (v=='') {
                _tx.parent().find("span").addClass("eorror").html("不能为空！");
            }else{
                if(!v.match(value)){
                    _tx.parent().find("span").removeClass("succss").addClass("eorror").html(eInfo);
                    return;
                }else if(v.match(value)){
                    _tx.parent().find("span").removeClass("eorror").addClass("succss").html(rInfo);
                    return;
                }
            }
        })
    };
    regt("reg-name",h,"用户名输入正确","必须是中文名");

    regt("reg-phone",d,"电话号码输入正确","电话号码输入有误");

    regt("reg-password",passW,"密码输入正确","密码输入有误");

    regt("reg-people",h,"输入正确","必须是中文名");

    regt("reg-cphone",d,"电话号码输入正确","电话号码输入有误");

    $(".form-item input[name='reg-comfirmpwd']").blur(function() {
        var _ts = $(this),
            vs = _ts.val(),
            ts = $(".form-item input[name='reg-password']").val();
        if(ts == vs){
            _ts.parent().find("span").removeClass("eorror").addClass("succss").html("两次输入的密码一致");
            return;
        }else{
            _ts.parent().find("span").removeClass("succss").addClass("eorror").html("两次输入的密码不一致");
            return;
        }
    });
})
