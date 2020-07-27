
var jsVer = 15;
var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth / 750;
var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)) {
	var version = parseFloat(RegExp.$1);
	// andriod 2.3
	if (version > 2.3) {
		document.write('<meta name="viewport" content="width=750, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
		// andriod 2.3以上
	} else {
		document.write('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">');
	}
	// 其他系统
} else {
	document.write('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi">');
}

 //人物角色切换
(function(){
		var roleswiper = new Swiper('.roles_wrap', {
            loop : true,
            effect : 'fade',
            on: {
                slideChangeTransitionStart: function(swiper){
                    var length = $(".game_roles .swiper_dock_list li").length;
                    $(".game_roles .swiper_dock_list li img").removeClass('on');
                    $(".game_roles .swiper_dock_list li img").eq((swiper.activeIndex-1)%length).addClass('on');
                },
            }
          //  prevButton:'.swiper-button-prev',
          // nextButton:'.swiper-button-next',

        });
        $(".game_roles .swiper_dock_list li").click(function(){
            var index = $(this).index()+1;
            roleswiper.slideTo(index);
			$(".game_roles .swiper_dock_list li img").removeClass('on');
            $(".game_roles .swiper_dock_list li img").eq(index-1).addClass('on');
        });
	})();
$(function(){
    //返回顶部
    $('#top-back').hide()
    $(window).scroll(function(){
        if($(this).scrollTop() > 350){
            $("#top-back").fadeIn();
        }
        else{
            $("#top-back").fadeOut();
        }
    })
    //任务角色视频弹出
    $(".video1").colorbox({iframe:true, innerWidth:600, innerHeight:338});	
    //点击盒子视频弹出
    $('.click_btn').click(function(){
        $('.masked').css('display','block');
       $('.login_box').css('display','block');
     })
      ////点击人物角色弹出对应声音
     var arr=['audio/01.mp3','audio/02.mp3','audio/03.mp3','audio/04.mp3','audio/05.mp3'];
 	var voiceAudio = new Audio();
    for( var i = 0; i < 10; i++ ){
        (function(k){
            var tbodyId = "audio" + k;
            $('.'+tbodyId).click(function(){
                voiceAudio.src = arr[k];
                voiceAudio.play();
            })
        })(i);
    }	

//各种弹出层
    $('.closed').click(function(){
        $(this).parent().css('display','none');
        $('.masked').css('display','none');
    })
    $('.login_btn').click(function(){
        if($('.text_content1').val()==''){
            $('.masked').css('display','block');
            $('.tc_loser').css('display','block');
        }else{
            $('.masked').css('display','block');
            $('.tc_succes').css('display','block');
            
        }
    });
    $('.details').click(function(){
        $('.masked').css('display','block');
         $('.tc_detail').css('display','block');
    })
   
   
});


