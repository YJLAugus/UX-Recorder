//删除Add_inter模块
function Add_delete(){
    $("#icon #remove").off().click(function(){
        var del_this = $(this)
       if(confirm_show()){
           console.log("1");
           $("#confirm_yes").off().click(function(){
                    $(this).parent().parent().hide()
                    del_this.parent().parent().remove()
            })
            $("#confirm_no").off().click(function(){
                $(this).parent().parent().hide()

            })
                
       }
    })
}

// Add_delete()
//添加Add_inter模块
function Add_li_add(){
    //检查已有inter_li的数量，
    var added_lis = document.querySelectorAll("#Added_inter li").length+1
    //超过四个不再添加
    if(added_lis<=4)
    {
        //添加新li
        let inter_li = $('<li><div id="icon"><img id="enter_page" src="img/进入2.png" alt=""><img id="remove" src="img/关闭.png" alt=""></div><h3 contenteditable="true">DEMO</h3><span>2020.08.21</span></li>')
        $("#Added_inter").append(inter_li)
        //绑定删除模块
        Add_delete()
        //绑定跳转页面模块
        page_change()
        //绑定进入新页面模块
        enter()
    }
    else{
        clearTimeout(timer_animate)
                $("#Add_inter").css({
                    Animation:"anim_demo 0.6s"
                })
                var timer_animate = setTimeout(()=>{
                    $("#Add_inter").css({
                        Animation:"none"
                    })
        },600)
    }  
}
page_change()
//调出新页面
function page_change(){
    $(".right").click(function(){
        img_move()
        width_change()
        if(flag_right)
        {
            $(".right").stop().animate({
                left:-250
            })
            flag_right = false
        }
    })
}
//record页面写完删除

img_move()
        width_change()
        if(flag_right)
        {
            $(".right").stop().animate({
                left:-250
            })
            flag_right = false
        }

