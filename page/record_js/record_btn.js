$(".record_before").click(()=>{
    start_record()
})
$("#stoprecord").click(()=>{
    end_record()
    move_stop()
    $("#play_btn").css("top",50+"px")
    $(".time_axis_2").css("height",0 +"px")
    Recording_time = 0
    n = Recording_time
    $("#clock").text("00:00")

    $("#pauserecord").prop("src","img_record/暂停2.png")
})

function start_record(){
    $(".record_before").fadeOut(200)
    $(".record_btn").animate({
        height:100
    },200)
    $(".record_after").fadeIn(200)
        btn_flag=false
    // move_down()
}

function end_record(){
    $(".record_after").fadeOut(200)
    $(".record_btn").animate({
        height:70
    },200)
    $(".record_before").fadeIn(200)
    $("#play_btn").prop("src","img_record/播放.png")
        btn_flag=true
    //点击end以后出现Resumerecording
    $(".resume_btn").fadeIn()
}

$("#pauserecord").click(function(){
    if(btn_flag)
    {
        $("#pauserecord").prop("src","img_record/暂停2.png")
        btn_flag=false
        start_record()
    }
    else
    {
        $("#pauserecord").prop("src","img_record/播放2.png")
        btn_flag=true
        move_stop()
    }
    
})