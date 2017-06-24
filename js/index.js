$(function(){

   

  $("#nav").find("ul li").hover(function(){
    'use strict'
    var src=$(this).find('a img').attr('src')
    var s=src.toString();
    var last=s.lastIndexOf('.');
    var lastsrc=s.slice(0,last);
    $(this).find('a img').attr('src',lastsrc+"1.png");
    console.log('aaa');
  },function(){
    'use strict'
   var src= $(this).find('a img').attr('src');
   var s=src.toString();
   var last=s.lastIndexOf('.')-1;
   var lastsrc=s.slice(0,last);
   $(this).find('a img').attr('src',lastsrc+'.jpg');
  })
})

window.onload=function(){
    (function(){
      var mB=myBrowser();
      if('Firefox'==mB || 'Chrome'==mB|| 'Opera' ==mB || 'Safari'==mB){

         var mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal',
          effect : 'cube',
          loop: true,
          autoplay:5000,
          autoplayDisableOnInteraction : false,
          preventClicks : false,
          lazyLoading : true,
          pagination: '.swiper-pagination',
          paginationClickable :true, 
          speed:2000,
        })    
      }else {
        var mySwiper = new Swiper('.swiper-container',{
            direction: 'horizontal',
            loop: true,
            autoplay : 2000,
            mousewheelControl : true,
            pagination : '.pagination',
            paginationClickable :true,
            touchRatio : 0.5,
            mousewheelControl : true,
            autoplayDisableOnInteraction : false,
        });  
      }
    })();
}