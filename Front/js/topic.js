//1.第一级topic的开关
$(".topic img").click(function(){
    //三角标旋转
    $(this).toggleClass("topic_img")
    //第二级topic隐藏和出现
    $(this).parent().find(".topic2").toggle()
})