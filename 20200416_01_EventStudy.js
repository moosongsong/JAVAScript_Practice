$(document).ready(function(){
  // $('button').on({
  //     mousedown: function(){
  //       alert('mousedown');
  //     },
  //     mouseup: function(){
  //       alert('mousedown');
  //     }
  // });

  $('button').click(function(e,data){
    data();
  });

  // $('button').trigger('click', 100);
  $('button').trigger('click', function(){
    alert('func');
    
  });
});
