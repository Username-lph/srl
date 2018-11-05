$(function(){
    // $(".my_jiu").mouseenter(function(){
    //     $(this).find(".my_jiu_top").css({"background":"#fff"});
    //     $(this).find(".main-dropdown").show();
    // })
    // $(".my_jiu").mouseleave(function(){
    //     $(this).find(".my_jiu_top").css({"background":"#f2f2f2"});
    //     $(this).find(".main-dropdown").hide();
    // })

    $(".my_jiu").hover(function(){
        $(this).find(".my_jiu_top").css({"background":"#fff"});
        $(this).find(".main-dropdown").show();
    },function(){
        $(this).find(".my_jiu_top").css({"background":"#f2f2f2"});
        $(this).find(".main-dropdown").hide();
    })
})