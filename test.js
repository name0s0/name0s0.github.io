var li_height = document.documentElement.clientHeight; 
setInterval(re_size,0);
function re_size(){   
    li_height = document.documentElement.clientHeight; 
    $("#wrap, ul li").css({height: li_height});
    $("ul").css({height: li_height* ($("ul li:last").index()+1) });
}

var li_num
$(function(){
    $("ul li").mousewheel( function(objEvent,intDelta){

        if( intDelta >0 ){
                 li_num = $(this).index()-1;
                 if( li_num >= 0  ){
                    $("ul").stop().animate({ marginTop: -(li_height*li_num)},300,"easeOutBounce");
                 }else{
                    li_num =  0;
                 };
           
        }else{ 
                 li_num = $(this).index()+1;
                 if( li_num <= $("ul li:last").index()  ){
                    $("ul").stop().animate({ marginTop: -(li_height*li_num)},300,"easeOutBounce");
                 }else{
                    li_num =  $("ul li:last").index();
                 };

        }
    });

  $(window).resize(function(){
      $("#wrap ul").css({marginTop: -( li_height - li_height*li_num)  });  
  });

});