function ul_up(){
    $("#nav_ul").animate({
        top:-5
        // top:-36
    })    
}
function ul_down(){
    $("#nav_ul").animate({
        // top:-5
        top:-36
    }) 
}
//当点击.nav时 切换ul
var nav_flag = true
$(".nav").click(()=>{
    if(nav_flag)
    {
        ul_down()
        nav_flag = false
    }
    else{
        ul_up()
        nav_flag = true
    }
})
