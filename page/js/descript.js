//当hover在title上时 #descript出现 离开时消失
$("#title").hover(()=>{
    $("#descrip").stop().fadeIn(300)
},()=>{
    $("#descrip").stop().fadeOut(300)
})
let flag = true
$("#descrip").on({
    click:()=>{
        if(flag)
        {
            //点击以后#descrip添加类
            $("#descrip_input").fadeIn()
            $("#descrip").text("Hide description")
            flag =false
        }
        else{
            $("#descrip_input").fadeOut()
            $("#descrip").text("Add description")
            flag = true
        }
        
    }
})