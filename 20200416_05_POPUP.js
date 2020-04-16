// var popupHTML = '<div class="popup">'+'<ul>'+
//     '<li class="message">데이터를 전송하시겠습니까?</li>'+
//     '<li class="action">'+
//     '<button type="submit" name="button" class="btn btn-blue">YES</button>'+
//     '<button type="button" name="button" class="btn btn-blue">NO</button>'+
//     '</li></ul></div>';
//
// $(document).ready(function(){
//   $('.openPopup').click(function(){
//     let popup = $(popupHTML);
//     popup.find('.message').text('Do you want to send message?');
//
//     popup.find('button:first-child').click(function(){
//       $(this).closest('.popup').remove();
//     });
//
//     popup.find('button:last-child').click(function(){
//       $(this).closest('.popup').remove();
//     });
//
//     popup.appendTo($('body'));
//   });
// });

$.fn.openPopup = function(msg, func){
  this.click(function(){
    $('.full').css('display', 'none');
    $('.popup').find('.message').text(msg);

    $('.popup').find('button').click(function(){
      if(func){
        func();
      }
      $(this).closest('.popup').css('display','none');
      $('.full').css('display', 'block');
      $(this).off('click');
    });
    $('.popup').css('display', 'block');
  });
}

$(document).ready(function(){
  $('.openPopup').openPopup("데이터를 전송하시겠습니까?", function(){
    alert("팝업 닫기전 작업수행");
  });
});
