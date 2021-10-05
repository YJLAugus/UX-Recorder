

function move_stop(){
    $("#play_btn").prop("src","img_record/播放.png")

    console.log("停止");
    
    clearInterval(timer_movedown)
    clearInterval(timer_passed)
    end()
    $("#clock").text(time_format(Recording_time.toFixed(0)))
}


function update_time(){
    let date = new Date()
    now_time = date.getTime()
    return now_time
}


let start_time
let end_time
function start(){
    start_time = update_time()
    console.log(start_time);
}

function end(){
    end_time = update_time()
    time_diff = (end_time - start_time)/1000
    Recording_time = Recording_time+time_diff
    n = Recording_time.toFixed(0)
    console.log(Recording_time.toFixed(0)); 
    //一个记录每段经过多少时间的和的变量
    //此变量在开始记录时定义 停止记录时不清除 结束记录时清除
    //Recording_time累加time_diff的值
}

function time_format(time){
    if(time<10)
    {
        return (`00:0${time}`)
    }
    else if(time>=10&&time<60)
    {
        return (`00:${time}`)
    }
    else if(time>60)
    {
        time_min = parseInt(time/60)
        time_second = time%60
        //分钟小于10 秒钟小于10 [01:02]
        if(time_min<10&&time_second<10)
        {
            return(`0${time_min}:0${time_second}`)
        }
        //分钟大于等于10 秒钟小于10 [10:02]
        else if(time_min>=10&&time_second<10)
        {
            return(`${time_min}:0${time_second}`)
        }
        //分钟小于10 秒钟大于等于10 [01:12]
        else if(time_min<10&&time_second>=10)
        {
            return(`0${time_min}:${time_second}`)
        }
        //分钟大于等10 秒钟大于等于10 [11:12]
        else if(time_min>=10&&time_second>=10)
        {
            return(`${time_min}:${time_second}`)
        }
    }
}
