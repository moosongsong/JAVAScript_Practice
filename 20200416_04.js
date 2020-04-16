//버튼에 모두 이미지 넣고
// $(document).ready(function(){
//   $('button').click(function(){
//     var temp = $(this).data('src');
//     $('img').attr('src', temp);
//   });
// });

var images = [
    '../image/a.jpg',
    '../image/b.jpg',
    '../image/c.jpg',
    '../image/d.jpg',
    '../image/e.jpg'
];

//버튼만 두고
// $(document).ready(function(){
//   $(images).each(function(index, item){
//     $('button').eq(index).data('src', item);
//   });
//
//   $('button').click(function(){
//     var temp = $(this).data('src');
//     $('img').attr('src', temp);
//   });
// });

//버튼 모두 없애고 하기
$(document).ready(function() {
  //클래스가 action인 div 영역에 버튼을  추가
  $(images).each(function(index, item) {
    $('<button/>', {text: (index+1)+'button'}).appendTo($('.action'));
    $('button').eq(index).data('src', item);

    //버튼 추가와 이벤트 추가 동시에 하기
    // $('<button/>', {text: (index+1)+'button', 'data-src' : item})
    // .click(function(){
    //     var temp = $(this).data('src');
    //     $('img').attr('src', temp);})
    // .appendTo($('.action'));
  });

  $('button').click(function(){
      var temp = $(this).data('src');
      $('img').attr('src', temp);
    });
});


//다른 방식.
$.fn.bindClick(function(image){
  this.click(function(){
    $('img').attr('src', image);
  });
});

$(document).ready(function(){
  $(images).each(function(index, item){
    let btn = $('<button/>', {text : item});
    btn.bindClick(item);
    btn.appendTo($('.action'))
  });
});
