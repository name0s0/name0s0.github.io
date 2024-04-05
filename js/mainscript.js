$(function() {
    var $nav = $('.gnb li');
    var $section = $('section'); //console.log($nav, $section)


    $nav.click(function(e) {
        e.preventDefault();
        var target = $(this);
        var i = target.index(); //console.log(i);
        var contents = $section.eq(i);
        var offset = contents.offset().top;
        $('body, html').animate({ scrollTop: offset }, 800, 'easeInOutSine');

        $nav.find('a').css('color', 'rgba(255,255,255,0.4)')
        target.find('a').css('color', 'rgba(255,255,255,1)')



    }); // nav li click

    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        if (wScroll >= $section.eq(0).offset().top) {
            $nav.find('a').css('color', 'rgba(255,255,255,0.4)');
            $nav.eq(0).find('a').css('color', 'rgba(255,255,255,1)')
        }

        if (wScroll >= $section.eq(1).offset().top) {
            $nav.find('a').css('color', 'rgba(255,255,255,0.4)');
            $nav.eq(1).find('a').css('color', 'rgba(255,255,255,1)');
        }

        if (wScroll >= $section.eq(2).offset().top) {
            // alert('000')
            $nav.find('a').css('color', 'rgba(255,255,255,0.4)');
            $nav.eq(2).find('a').css('color', 'rgba(255,255,255,1)');
        }

        if (wScroll >= $section.eq(3).offset().top) {
            $nav.find('a').css('color', 'rgba(255,255,255,0.4)');
            $nav.eq(3).find('a').css('color', 'rgba(255,255,255,1)');

        }
        if (wScroll >= $section.eq(4).offset().top) {

            $nav.find('a').css('color', 'rgba(255,255,255,0.4)');
            $nav.eq(4).find('a').css('color', 'rgba(255,255,255,1)');

        }

        if (wScroll >= $section.eq(5).offset().top) {
            $nav.find('a').css('color', 'rgba(255,255,255,0.4)');
            $nav.eq(5).find('a').css('color', 'rgba(255,255,255,1)');


        }
    });


    $(window).scroll(function() {
        var bgScroll = $(this).scrollTop();

       if (bgScroll >= 980) {
            $('#about').css('background-attachment', 'scroll')

        } else {
            $('#about').css('background-attachment', 'fixed')
        }

    });

    $('.clickTxt').click(function() {
        $('.clickTxt').css('display', 'none');
        $('.line_box > img').animate({
            top: '100px',
            left: '25%'
        },500);
        $('.show_txt').fadeIn();
        $('.show_txt').animate({right:90, opacity:1}, 1000);


    });

/*
   var skillTitle = $('.skill_title');
   var skillcontent =$('.skillTxt_contents img');


 skillTitle[0].addEventListener('click',function(){
    $(skillcontent).css({top:'-100%', transition:'all 0.5s ease'});
    $(skillcontent).eq(0).css({top:0, transiton:'all 0.5s ease'});
   })


  skillTitle[1].addEventListener('click',function(){
    $(skillcontent).css({top:'-100%', transition:'all 0.5s ease'});
    $(skillcontent).eq(1).css({top:0, transiton:'all 0.5s ease'});
  })

  skillTitle[2].addEventListener('click',function(){
    $(skillcontent).css({top:'-100%', transition:'all 0.5s ease'});
    $(skillcontent).eq(2).css({top:0, transiton:'all 0.5s ease'});
  })

    skillTitle[3].addEventListener('click',function(){
   $(skillcontent).css({top:'-100%', transition:'all 0.5s ease'});
    $(skillcontent).eq(3).css({top:0, transiton:'all 0.5s ease'});
  })

      skillTitle[4].addEventListener('click',function(){
 $(skillcontent).css({top:'-100%', transition:'all 0.5s ease'});
    $(skillcontent).eq(4).css({top:0, transiton:'all 0.5s ease'});
  })

        skillTitle[5].addEventListener('click',function(){
   $(skillcontent).css({top:'-100%', transition:'all 0.5s ease'});
    $(skillcontent).eq(5).css({top:0, transiton:'all 0.5s ease'});
  })

          skillTitle[6].addEventListener('click',function(){
  $(skillcontent).css({top:'-100%', transition:'all 0.5s ease'});
    $(skillcontent).eq(6).css({top:0, transiton:'all 0.5s ease'});
  })

            skillTitle[7].addEventListener('click',function(){
 $(skillcontent).css({top:'-100%', transition:'all 0.5s ease'});
    $(skillcontent).eq(7).css({top:0, transiton:'all 0.5s ease'});
  })

    skillTitle[8].addEventListener('click',function(){
 $(skillcontent).css({top:'-100%', transition:'all 0.5s ease'});
    $(skillcontent).eq(8).css({top:0, transiton:'all 0.5s ease'});
  })

   skillTitle[9].addEventListener('click',function(){
 $(skillcontent).css({top:'-100%', transition:'all 0.5s ease'});
    $(skillcontent).eq(9).css({top:0, transiton:'all 0.5s ease'});
  })

*/

  const skillTitle = document.getElementsByClassName('skill_title');
  const skillcontent = document.querySelectorAll('.skillTxt_contents img');

  const skillTitleArray = Array.from(skillTitle);
  //console.log(skillTitle.constructor.name, skillTitleArray.constructor.name)

  let cnt = [];
  let i=0;
  for(const ele of skillTitleArray) {
   // console.log(ele);
    cnt[i] = i; //console.log(cnt[i])
    i++;
  }

  for(const l of cnt){
    skillTitleArray[l].addEventListener('click', function(){
      $(skillTitleArray).css('color','rgba(255,255,255,0.5)')
      $(this).css('color','rgba(255,255,255,1)')
      $(skillcontent).css({top:'-100%', transition:'all 0.5s ease'});
      skillcontent[l].style.top = 0;
      skillcontent[l].style.transition = 'all 0.5s ease'
    })
  }


  var scrollEvent = false;
  var count = 0;

  $('html, body').on('mousewheel', function(e){
       e.preventDefault();

       var m = e.originalEvent.wheelDelta;
       var sb = $('#wrap > section').height();

       if(m>1 && scrollEvent == false && count >= 1) {
        console.log(count);
        scrollEvent = true;
        count--;
        $('html, body').stop().animate({scrollTop : sb*count}, {
          duration:800, easing:'easeInOutBounce',complete:function(){
            scrollEvent = false;
          }
        });
       } else if( m<1 && scrollEvent == false && count <6 ){
        console.log(count);
        scrollEvent = true;
        count++;
        $('html, body').stop().animate({scrollTop : sb * count}, {
          duration:800, easing:'easeInOutBounce', complete:function(){
            scrollEvent= false;
          }
      })
       }
  })

}); //ready end