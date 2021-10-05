var music_time

$(document).ready(function() {
    var timeout;
    var audio = document.createElement('audio');
    audio.src = "./mp3/demo.mp3";
    // 点击播放/暂停按钮事件
    $("#Play").on('click',function () {
        if(!audio.paused){
            $("#Play").children("span").html("<img src='img_record/播放2.png' >");
            Pause();
        }
        else{           
            $("#Play").children("span").html("<img src='img_record/暂停2.png' >");
            Play();    
            }           
    });
    //控制进度条
    
    // // $('.ProcessNow').on('click',function(t){
    //        没写出来[/哭哭唧唧]
     
    // // })
    // 播放函数
    function Play() {
        audio.play();
        TimeSpan(); 
        music_time = audio.duration
        console.log(music_time);
        console.log("打开定时器");
        move_down()
        timer_passed = setInterval(()=>{
            $("#clock").text(currentTime)
        },1000)
    } 
    //暂停函数
    function Pause() {  
        audio.pause();
        move_stop()
    } 
    //显示事件函数
    var currentTime
    var timeAll
    function TimeSpan() {
        var ProcessNow = 0;
        setInterval(function () {
            var ProcessNow = (audio.currentTime / audio.duration) * 260;
            $(".ProcessNow").css("width", ProcessNow);
            currentTime = timeFormat(audio.currentTime);
            timeAll = timeFormat(TimeAll());
            // $(".SongTime").html(currentTime + "\n" + "\n" + timeAll);
            $(".SongTime #cur_time").text(currentTime)
            $(".SongTime #end_time").text(timeAll)
            }, 1000);
    }  
    //计算时间的函数
    function timeFormat(number) {
        var minute = parseInt(number / 60);
        var second = parseInt(number % 60);
        minute = minute >= 10 ? minute : "0" + minute;
        second = second >= 10 ? second : "0" + second;
        return minute + ":" + second;
    }
    //整首歌曲函数
    function TimeAll() {
        return audio.duration; 
    }  
})

//向下移动
let timer_movedown
let timer_passed
let now = new Date()
let Recording_time = 0
let time_diff
let n=0

function move_down(){
    $("#play_btn").prop("src","img_record/暂停.png")
    console.log(music_time);
    clearInterval(timer_movedown)
    //1.获取时间轴的高度

    const axis_height = $(".time_axis").height()
    //2.设置定时器 每个周期向下移动的距离＋0.01%

    let move = axis_height/music_time//加入mp3时长
    start()
    timer_movedown = setInterval(() => {
        //打开定时器时的时间
        let btn_top = $("#play_btn").offset().top-170
        let axis_2 = $(".time_axis_2")
        $("#play_btn").css("top",btn_top+move+"px")
        axis_2.css("height",btn_top - 50 +"px")
        if(btn_top - 50<=axis_height)
        {
        }
        else{
            move = 0
        }
        //进度条功能
        //跟踪时间功能
    }, 1000);
}