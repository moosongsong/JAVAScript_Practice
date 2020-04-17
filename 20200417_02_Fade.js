$(document).ready(function() {
  changeNews(2000);
});

function changeNews(interval) {
  $('.news>ul>li').not(':first-child').fadeOut();
  (function(interval) {
    let func = arguments.callee;
    setTimeout(function() {
      $('.news>ul>li:first-child').fadeOut("slow", function() {
        $('.news>ul>li:first-child').appendTo($('.news>ul'));
        $('.news>ul>li:first-child').fadeIn("slow");
        // $('.news>ul>li:last-child').css({
        //   height: '20px',
        //   display: ' block',
        //   visibility: 'visible'
      });
      func(interval);
    }, interval);
    // changeNews(interval);
  })(interval);
}
