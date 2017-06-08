$(function(){

   var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        effect : 'cube',
        loop: true,
        autoplay:5000,
        autoplayDisableOnInteraction : false,
        preventClicks : false,
        lazyLoading : true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable :true, 
      })    

  $("#nav").find("ul li").hover(function(){
    'use strict'
    var src=$(this).find('a img').attr('src')
    var s=src.toString();
    var last=s.lastIndexOf('.');
    var lastsrc=s.substring(0,last);
    $(this).find('a img').attr('src',lastsrc+"1.png");
  },function(){
    'use strict'
   var src= $(this).find('a img').attr('src');
   var s=src.toString();
   var last=s.lastIndexOf('.')-1;
   var lastsrc=s.substring(0,last);
   $(this).find('a img').attr('src',lastsrc+'.jpg');
  })
})
