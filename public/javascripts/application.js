function scrollBackgrounds(){
  var viewportHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  $("section:visible").each(function(index, section){
    section = $(section);
    if (section.prev()){
      var sectionTop = section.offset().top - scrollTop;
      
      //When sectionTop == viewport height, background-position = 35%
      //When sectionTop == 0, background-position = 0%
      var position = Math.floor((sectionTop / viewportHeight) * 70);
      
      if (position < 0)
        position = 0;

      section.prev().css('background-position', '50% ' + position + "%");
    }
  });
}

$(function(){
  $(window).scroll(scrollBackgrounds);
  $(window).resize(scrollBackgrounds);

  scrollBackgrounds();
});
