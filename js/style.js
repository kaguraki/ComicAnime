$(function(){
  var duration=300,
      $images=$(".item");

  $images
    .on("mouseover",function(){
      $(this).find("strong").stop(true).animate({opacity:1,left:"0%"},duration);
      $(this).find("span").stop(true).animate({opacity:1},duration);
    })
    .on("mouseout",function(){
      $(this).find("strong").stop(true).animate({opacity:0,left:"-200%"},duration);
      $(this).find("span").stop(true).animate({opacity:0},duration);
    });
});
