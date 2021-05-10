
    
    function slide() {
  if($("#img-1").is(':checked'))
       $("#img-dot-1").css('background-color','black');
   else
       $("#img-dot-1").css('background-color','lightgreen');
   if($("#img-2").is(':checked'))
       $("#img-dot-2").css('background-color','black');
   else
       $("#img-dot-2").css('background-color','lightgreen');
   if($("#img-3").is(':checked'))
       $("#img-dot-3").css('background-color','black');
   else
       $("#img-dot-3").css('background-color','lightgreen');
   if($("#img-4").is(':checked'))
       $("#img-dot-4").css('background-color','black');
   else
       $("#img-dot-4").css('background-color','lightgreen');
   if($("#img-5").is(':checked'))
       $("#img-dot-5").css('background-color','black');
   else
       $("#img-dot-5").css('background-color','lightgreen');
}
$(function () {
 setInterval("slide()", 100);
});

function slideSwitch() {
    var $active = $('#slideshow a.active');
    if ($active.length === 0)
        $active = $('#slideshow a:last');
    var $next = $active.next().length ? $active.next()
    : $('#slideshow a:first');
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
    .addClass('active')
    .animate({opacity: 1.0}, 1000, function () {
    $active.removeClass('active last-active');
    });
   }
   $(function () {
    setInterval("slideSwitch()", 6000);
});