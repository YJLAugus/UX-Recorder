//进入到新页面
var history_flag = false
function enter(){
    $("#icon #enter_page").off().click(function(){
        //跳转页面
        //1.将container fadeout
        //2.将record_container fadein
        enter_record()
        history_flag = true
    })
}
function enter_record(){
    $(".container").fadeOut()
    $(".login_container").fadeOut()
    $(".record_container").fadeIn()
}

function quit_record(){
    $(".record_container").fadeOut()
    $(".login_container").fadeOut()
    $(".container").fadeIn()
}
//退出录音页面
$("#quit").click(()=>{
    quit_record()
})
$(".change_page #right").click(()=>{
    if(history_flag)
    {
        enter_record()
    }
})
//调试