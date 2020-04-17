$.fn.slide = function(){
  this.click(function(){
    if($(this).text() == 'UP'){
      setTimeout(function () {
        $(this).closest('body').children('div:first-child')
                                .children('img').slideUp(1000,
                                function(){
                                  alert("UP!!!");
                                });
      }, 0);

    }
    else{
      setTimeout(function () {
        $(this).closest('div').siblings('div').children('img').slideDown(1000);
      }, 0);

    }
  });
}

$(document).ready(function(){
  $('button').slide();
});
