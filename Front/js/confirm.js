//弹窗出现
function confirm_show(){
    $(".confirm").show()
    //点击页面其他地方 confirm消失
    confirm_hide()
    return true
}

function confirm_hide(){
   $("#confirm_yes").off().click(function(){
        console.log("删除");
        c_flag = true
    })
    $("#confirm_no").off().click(function(){
        console.log("取消");
        c_flag = true
    })
    return true

}

