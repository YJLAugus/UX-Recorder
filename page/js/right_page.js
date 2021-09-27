//点击Add_inter按钮 左边页面进行动画 右边页面左移
//左边页面的动画
//width变为100px,middleleft的width值也变化
var flag_right = true
var flag_inter = true
$("#Add_inter").on({
    click:()=>{
        if(flag_right||flag_inter)
        {
            Add_li_add()
            
        }
        
    }
})
//定义一个隐藏left栏信息的函数
function left_hide(){
//2.project_list隐藏 username隐藏
//Add project span消失 width变为100px

    $("#project_ul").hide()
    $(".project-add ul li span").hide()
    $(".user h3").hide()
}
function left_show(){
    //2.project_list隐藏 username隐藏
    //Add project span消失 width变为100px
        clearTimeout(timer)
        $("#project_ul").show()
        $(".user h3").show()
        var timer = setTimeout(()=>{
            $(".project-add ul li span").fadeIn()
        },700)

    }
function img_move(){
//头像左移20px addproject的width
    $(".user").stop().animate({
        left:10
    })
}
function img_move_back(){
    //头像左移20px addproject的width
        $(".user").animate({
            left:40
        })
    }
function width_change(){
    //middleleft的width值也变化
    $(".middle_left").stop().animate({
        width:90
    })
    //1.width变为100px
    $("#left").stop().animate({
        width:90
    },function(){
        left_hide()
    })
    //addproject的width也变短
    $(".project-add ul li").stop().animate({
        left:-10,
        width:70,
        height:70
    },500)
    clearTimeout(timer2)
    var timer2 = setTimeout(()=>{
        $("#Add-img").fadeIn(200)
    },800)
}
function width_change_back(){
    //middleleft的width值也变化
    $(".middle_left").animate({
        width:120
    })
    //1.width变为100px
    $("#left").animate({
        width:350
    },function(){
        left_show()
    })
    //addproject的width也变短
    $(".project-add ul li").stop().animate({
        left:0,
        width:310,
        height:80
    },500)
    $("#Add-img").fadeOut(200)
}
//获取project的数目 当数目超过5时不再添加新的li

$(".project-add ul li").on({
    click:()=>{
        if(!flag_right)
        {
            
            left_show()
            width_change_back()
            $(".right").stop().animate({
                left:
                0
            })
            flag_right =true
        }
        else if(flag_right)
        {
            const project_list_num = document.querySelectorAll("#project_ul li").length - 1
            //添加新的project
            if(project_list_num<=5)
            {
                Add_li()
                text_editable("#project_ul li span")
            }
            else{
                clearTimeout(timer_animate)
                $(".project-add").css({
                    Animation:"anim_demo 0.6s"
                })
                var timer_animate = setTimeout(()=>{
                    $(".project-add").css({
                        Animation:"none"
                    })
                },600)
                
            }
            
            
        }
    }
})

//right_page更换