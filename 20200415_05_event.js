$(document).ready(function(){
  // $('input[type=submit]').click(function(){
  //   alert("button event");
  // });
  // //submit이벤트는 폼에서 발생한다.
  // $('form').submit(function(e){
  //   alert("submit event");
  //   e.preventDefault();
  // });

  // 클릭이벤트의 범위 조정하기.
  // $('body').click(function(){
  //   alert("click");
  // });

  // $(document).click(function(){
  //   alert("click");
  // });
  //
  // $('input[type=button]').click(function(e){
  //   alert("button click");
  //   e.stopPropagation();
  // });

  // 버튼이 없을때, 내용 강제전송 하는 방법
  // $('input[type=button]').click(function(){
  //   alert("send");
  // });
  // setTimeout(function(){
  //   $('input[type=button]').trigger('click');
  // }, 2000);
  // $('#send').click(function(){
  //   alert("send");
  // });

  $('#btnCheck').click(function(){
    if($('#name').val().trim()==''){
      alert("이름입력!");
      $('#name').val('');
      $('#name').focus();
      $('#checkName').val('');
      return;
    }
    alert("이름검사가 완료되었습니다.");
    $('#checkName').val('checked');
  });

  $('#send').click(function(){
    if($('#checkName').val() != 'checked'){
        $('#btnCheck').trigger('click');
      return;
    }
    alert("내용을 전송합니다.");
  });

});
