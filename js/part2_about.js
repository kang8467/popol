$(function(){
    $(".power-switch").click(function(){
        if($(".power-switch input").is(":checked")){
            $("#about1_img_text").animate({
                left: 0
            },1000,"easeOutBounce");
            $("#about2_img_text").animate({
                right: 0
            },1000,"easeOutBounce");
            $("#about3_img_text").animate({
                left: 0
            },1000,"easeOutBounce");
            $("#about4_img_text").animate({
                right: 0
            },1000,"easeOutBounce");
        }else{
            $("#about1_img_text").animate({
                opacity: 0
            },500,function(){
                $("#about1_img_text").css("left","850px").css("opacity","1");
            });
            
            $("#about2_img_text").animate({
                opacity: 0
            },500,function(){
                $("#about2_img_text").css("right","850px").css("opacity","1");
            });

            $("#about3_img_text").animate({
                opacity: 0
            },500,function(){
                $("#about3_img_text").css("left","850px").css("opacity","1");
            });

            $("#about4_img_text").animate({
                opacity: 0
            },500,function(){
                $("#about4_img_text").css("right","850px").css("opacity","1");
            });
        }
    });

});