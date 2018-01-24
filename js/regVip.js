requirejs.config({
    paths: {
        "jquery" : "../vendor/jquery/jquery.min"
    }
});
requirejs(["jquery"],function($){
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
})
