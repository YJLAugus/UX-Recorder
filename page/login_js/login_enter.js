
    $(".user .img").off().click(function(){
        //跳转页面
        //1.将container fadeout
        //2.将record_container fadein
        enter_login()
        history_flag = true
    })
function enter_login(){
    $(".container").fadeOut()
    $(".record_container").fadeOut()
    $(".login_container").fadeIn()
}
