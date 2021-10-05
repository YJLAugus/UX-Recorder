//1.第一级topic的开关
function topic_switch(){
    $(".topic #topic_switch").off().click(function(){
        //三角标旋转
        $(this).toggleClass("topic_img")
        //第二级topic隐藏和出现
        $(this).parent().find("ul").toggle()
    })    
}
//按下Tab拉添加新的topic 或者Shift Tab来取消topic
//检测键盘是否敲下tab
$(document).keydown((e)=>{
    
    if(e.shiftKey&&e.keyCode===13)
    {
        //按下了Tab
        //添加新的topic
        add_topic()
    }
    else if(e.shiftKey&&e.keyCode===68)
    {
    }
    else{
    }

})
//添加新的topic
    function add_topic(){
            let topic_li = $('<li id="Topic_li"><img id="topic_switch" src="img/三角1.png" alt=""><input id="topic_input" placeholder="Add a topic" type="text"><ul id="ques_ul"><li id="ques_li"><textarea placeholder="Add a question..." id="ques_text" name="" id="" cols="90" rows="1"></textarea><img id="delete_ques" src="img/关闭.png" alt=""></li><li id="ques_li"><textarea placeholder="Press Enter to add new question or Press Shift+Enter to add new topic " id="ques_text" name="" id="" cols="90" rows="1"></textarea><img id="delete_ques" src="img/关闭.png" alt=""></li></ul></li>')
            $("#Topic_ul").append(topic_li)
            topic_init()
    }

//删除ques_li
function delete_ques_li(){
    $("#ques_li img").click(function(){
        $(this).parent().remove()
})
}
function delete_topic_li(){
    $("#Topic_li #delete_topic").click(function(){
        $(this).parent().remove()
})
}
delete_topic_li()

//定义一个topic初始化函数 包括topic展开 ques_li删除模块
function topic_init(){
    topic_switch()
    delete_ques_li()
    delete_topic_li()
}
topic_init()