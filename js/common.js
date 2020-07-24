 //人物角色切换
(function(){
		var roleswiper = new Swiper('.roles_wrap', {
       		
           loop : true,
            effect : 'fade',
          //  prevButton:'.swiper-button-prev',
           // nextButton:'.swiper-button-next',
            onSlideChangeStart:function(swiper){
                var length = $(".game_roles .swiper_dock_list li").length;
				$(".game_roles .swiper_dock_list li img").removeClass('on');
                $(".game_roles .swiper_dock_list li img").eq((swiper.activeIndex-1)%length).addClass('on');
            }
        });
        $(".game_roles .swiper_dock_list li").click(function(){
            var index = $(this).index()+1;
            roleswiper.slideTo(index);
			$(".game_roles .swiper_dock_list li img").removeClass('on');
            $(".game_roles .swiper_dock_list li img").eq(index-1).addClass('on');
        });
	})();
$(function(){
     //3d切换
    $('#carousel').carousel({
        curDisplay: 0, //默认索引
        autoPlay: false, //是否自动播放
        interval: 3000 //间隔时间
    });
      //滚动条
    new CusScrollBar({
        contentSelector: '.scroll_cont', //滚动内容区
        barSelector: '.scroll_bar', //滚动条
        sliderSelector: '.scroll_slider' //滚动滑块
    });
    //导航切换到对应屏幕
    $(".nav_btn a").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
      
    });
	$('.nav_02').click(function(){
		jQuery('html,body').animate({scrollTop:$('#section2').offset().top}, 1000);
	});
	$('.nav_03').click(function(){
		jQuery('html,body').animate({scrollTop:$('#section4').offset().top}, 1000);
	});
	$('nav_04').click(function(){
		jQuery('html,body').animate({scrollTop:$('#section5').offset().top}, 1000);
    });
    $('nav_05').click(function(){
		jQuery('html,body').animate({scrollTop:$('#section6').offset().top}, 1000);
	});
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
    $(".video1").colorbox({iframe:true, innerWidth:800, innerHeight:450});	
    $(".cpModal_01").colorbox({iframe:true, innerWidth:800, innerHeight:450});	


    //点击盒子视频弹出
    $('.click_btn').click(function(){
        // console.log('1');
        // $(this).css('display','none');
        // $('.bg_video').css('display','block');
        $('.masked').css('display','block');
        
       $('.login_box').css('display','block');
      // $('.login_box').fadeIn();
        //$('.bg_video').css('display','none');
      // $('.box_img').css('display','block');
        //  setTimeout(function(){
            
     
        //  },3000)
         $('.closed').click(function(){
           $('.login_box').css('display','none');
               $('.masked').css('display','none');
            
         });
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

$('.login_btn').click(function(){
console.log($('.text_content1').val())
    if($('.text_content1').val()==''){
        $('.inline').attr("href","images/input_lose.jpg");
        $(".inline").colorbox({width:"800px",height:"450px"});
    }else{
        $('.inline').attr("href","#inline_content");
        $(".inline").colorbox({inline:true, width:"800px",height:"450px"});
        
    }
})
   


    $(function(){
        $('a[href*=#]').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({
                            scrollTop: targetOffset
                        },
                        800);
                    return false;
                }
            }
        });
    })	
});
//ice
$(document).ready(function (){
  //ice
  var ice1=$('.ice1'),ice2=$('.ice2');
  var h=document.documentElement.clientHeight,
      w=document.documentElement.clientWidth;
  $(document).on('mousemove',moveice);

  function moveice (e){
    e=e||event;  
    ice1.css({"left":-330-(e.clientX-w/2)/100+"px","top":575+(e.clientY-h/2)/100+"px"});
    ice2.css({"right":-340+(e.clientX-w/2)/100+"px","top":430+(e.clientY-h/2)/100+"px"});
  } 
})

