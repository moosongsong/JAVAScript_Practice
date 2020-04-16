// 1.
// $.fn.command = function(){
//   console.log(this);
// }
//
// $(document).ready(function(){
//   $('button').command();
//   $('#data').command();
// });

// 2.
// $.fn.bindClick = function(id){//$('button').click();
//   this.id = id;
//   this.click(function(){
//     console.log(id+' button click');
//   });
// }
//
// $(document).ready(function(){
//   $('button:first-child').bindClick('first');
//   $('button:last-child').bindClick('last');
//
// });

// 3. data jquery사용해보기
// var Student = Array(
//   {name : 'hong', age:20},
//   {name : 'sim', age:30}
// );
//
// $(document).ready(function(){
//   $('button').eq(0).data('Student', Student[0]);
//   $('button').eq(1).data('Student',Student[1]);
//
//   $('button').click(function(){
//     if (jQuery.hasData(this)) {
//       console.log('has');
//     }
//     console.log($(this).data('Student'));
//   });
// });

//속성 데이타 넣고 삭제하기
$(document).ready(function(){
  $('button').click(function(){
    console.log($(this).data('name'));
    console.log($(this).data('age'));
    $(this).data('major', 'CS');
    console.log($(this).data('major'));
    $(this).removeData('major');
    console.log($(this).data('major'));
  });
});
