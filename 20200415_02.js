var names = ['hong', 'sin', 'lee', 'kim', 'choi',
            'song', 'sim', 'nam', 'kang', 'nono'];

$(document).ready(function(){
  //document를 jquery객체로 변환
  //객체생성 이외에 자바객체를 jquery객체로의 변환도 지원한다.
  // 자바스크립트의 for each문을 사용해보기.
  // names.forEach(function(item, index){
  //   document.write(index+','+item+'<br/>');
  // });
  //
  var lis = $('ul > li');//해당하는 객체를 찾아서 jquery객체로 변환
  lis.each(function(index, item){
    $(item).text(names[index]);
    // item.innerHTML = index;
  });

  //짝수 색칠하기 방법1
  // var list = $('li');
  // var selectList = list.filter(':even');
  // selectList.each(function(index, item){
  //   $(item).css('background-color', 'black');
  // });

  // 짝수 색칠하기 방법2
  // var list2 = $('li');
  // list2.each(function(index, item){
  //   if(index%2 == 0){
  //     $(item).css('background-color', 'black');
  //   }
  // });

  //짝수 색칠하기 방법 3
  // var list3 = $('li');
  // // list3.filter(func).method();
  // list3.filter(function(index){
  //   //필터링 조건
  //   //이 함수가 참을 반환하는 것에 대하여
  //   //method() 를 호출
  //   if(index%2 == 0){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  //   // return (index%2 == 0);
  // }).css('background-color', 'black');

  //첫번째 li 구하기
  // var obj1 = $('li').eq(0);//eq는 제로베이스이다
  // var obj2 = $('li:first-child');
  // var obj3 = $('li').first();
  // var obj7 = $('li:nth-child(1)');
  //
  // var obj4 = $('li').last();
  // var obj5 = $('li:last-nth-child(1)');
  // var obj6 = $('li:last-child');

  //add 사용해보기
  var obj8 = $('li').first().add($('li').last()).text('selectList');
  obj8.css({'background-color' : 'black', 'color' : 'white'});


  var obj9 = $(document).find('li');
  console.log( $(document));
});
