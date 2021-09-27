//左边导航栏的自适应模块
function nav_change(){
    const project_list = document.querySelectorAll("#project_ul li")
    let top_height = $(".top").height()
        let lis_height = $("#project_ul li").height()*project_list.length
        let window_height = $(this).height()
        let middle_height = $(".middle").height()
        middle_height = lis_height
        let bottom_height= window_height - (middle_height+top_height)+20
        $(".middle").css("height",[middle_height])
        $(".bottom").css("height",[bottom_height])
}