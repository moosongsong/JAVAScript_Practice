$.fn.getPrompt = function(msg){
  let field = this;
  this.focus(function(){
    let div = $('<div/>', {class : 'prompt'}).appendTo($('body'));
    let ul = $('<ul/>').appendTo(div);

    let li1 = $('<li/>',{text:msg}).appendTo(ul);

    let li2 = $('<li/>').appendTo(ul);
    let input = $('<input/>', {type : 'text'}).appendTo(li2);

    let li3 = $('<li/>', {id:'btn'}).appendTo(ul);
    let btn = $('<button/>', {type : 'button', text:'삭제'}).appendTo(li3);

    btn.click(function(){
      $(field).val(input.val());
      $(this).closest('.prompt').remove();
    });
  });
}

$(document).ready(function(){
  // $('#name').on('focus', function(){
  //   ;
  // });

  $('#name').getPrompt("이름을 입력해주세요.");
  $('#mail').getPrompt("메일을 입력해주세요.")
});
