  //project导航模块
  //1.圆角模块
  //定义圆角模块的函数
  //获取active_li
            //获取active_li
        function li_change(){
            const project_list = document.querySelectorAll("#project_ul li")
            //遍历数组 绑定index
            for(let i=0;i<project_list.length;i++)
            {
                if(i!=0&&i!=project_list.length-1)
                {
                    project_list[i].index = i
                
                            project_list[i].addEventListener("click",function(){
                            //判断是否为当前目录，是则do nothing
                            if($(this).hasClass("active_li"))
                            {
                            }
                            //不是则addclass(active_li),兄弟li则remove(a_li)
                            else{
                                $(this).addClass("active_li").siblings().removeClass("active_li")
                                change_radius()
                                change_titled()
                            }
                    })
                    
                }   
            }
        }
        li_change()
            
            //定义一个函数为改变圆角
            function change_radius(){
                const project_list = document.querySelectorAll("#project_ul li")
                //获取active_li的index值
                const a_li_index = document.querySelector(".active_li").index
                //在改变之前还原兄弟li所有的圆角
                $(project_list).stop().animate({
                borderBottomRightRadius: "0px",
                borderTopRightRadius: "0px"
                },0.1)
                //索引值为index-1和index+1的li改变border-radius
                /* border-radius: 0px 23px 23px 0px; */
                $(project_list[a_li_index-1]).animate({
                    borderBottomRightRadius: "20px",
                })
                $(project_list[a_li_index+1]).animate({
                    borderTopRightRadius: "20px"
                })
            }
            change_radius()
            //定义一个改变标题的函数
            function change_titled(){
                
                //右边title值来自project_list
                $(".title h2").text($(".active_li span").text())
                $(".row:nth-child(1) h1").text($(".active_li span").text())
            }
//2.文字可编辑模块
function text_editable(Thespan){
    let project_span = document.querySelectorAll(Thespan)
    $(Thespan).on({
        mouseenter:()=>{
            $(project_span).prop("contenteditable","true")
        },
        focusout:()=>{
            $(project_span).prop("contenteditable","false")
        }
    })
}
text_editable("#project_ul li span")

$("#icon #edit").on({
    click:()=>{
        console.log("可更改了");
        $("#Added_inter li h3").prop("contenteditable","true")
    }
})
$("#Added_inter li").on({
    focusout:()=>{
        console.log("不可更改了");
        $("#Added_inter li h3").prop("contenteditable","false")
    }
})