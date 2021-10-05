$(".resume_btn").click(()=>{
    resume_toggle()
})

var resume_flag = true
function resume_toggle(){
    if(resume_flag)
    {
        $(".record_btn").hide()
        $(".MusicPanel").fadeIn()
        resume_flag = false
    }
    else{
        $(".MusicPanel").hide()
        $(".record_btn").fadeIn()
        resume_flag = true
    }
}
