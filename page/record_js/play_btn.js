
let btn_flag = true
function toggle_btn(){
    console.log("demo2");
    if(btn_flag){
        console.log(btn_flag);
        $("#play_btn").prop("src","img_record/暂停.png")
        btn_flag = false
        console.log(btn_flag);
    }
    if(!btn_flag)
    {
        
        btn_flag = true
    }
}