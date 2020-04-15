
var cinemas = [{ title:"Burn The Stage", stime:"16:00", etime:"18:00", price:"10000"},
                { title:"Beyond The Scene", stime:"17:00", etime:"19:00", price:"11000"},
                { title:"Bring The Soul", stime:"18:00", etime:"20:00", price:"12000"},
                { title:"Times", stime:"19:00", etime:"21:00", price:"13000"},
                { title:"Bon Boyage", stime:"20:00", etime:"22:00", price:"14000"},
                { title:"about Time", stime:"21:00", etime:"23:00", price:"15000"},
                { title:"iron man", stime:"21:00", etime:"23:00", price:"15000"},
                { title:"its", stime:"21:00", etime:"23:00", price:"15000"}
];

var posters = [{title : "Burn The Stage", pic:"../image/a.jpg" },
                {title : "Beyond The Scene", pic:"../image/b.jpg" },
                {title : "Bring The Soul", pic:"../image/c.jpg" },
                {title : "Times", pic:"../image/d.jpg" },
                {title : "Bon Boyage", pic:"../image/e.jpg" },
                {title : "about Time", pic:"../image/a.jpg" },
                {title : "iron man",pic:"../image/b.jpg" },
                {title : "its", pic:"../image/c.jpg" }
];

$(document).ready(function(){
  let row = $('<div/>').addClass("row").appendTo($('body'));
  let left = $('<div/>').addClass("left").appendTo(row);
  let right = $('<div/>').addClass("right").appendTo(row);

  cinemas.forEach(function(item){
    let movieBox = $('<ul/>').addClass("movieBox").appendTo(left);
    $('<li/>', {text : item.title}).appendTo(movieBox);
    $('<li/>', {text : item.stime +' - '+item.etime}).appendTo(movieBox);
    $('<li/>', {text : item.price +' won'}).appendTo(movieBox);
  });

  let str = "영화 설명";
  $('<div>rnrn</div>').appendTo(right);

  $('.movieBox').mouseenter(function(){
    $(this).css("background", "black");
  });
  $('.movieBox').mouseleave(function(){
    $(this).css("background", "rgb(44, 17, 69)");
  });

  $('.movieBox').click(function(){
    right.empty();
    $('.movieBox').css("height", "32px");
    $(this).css("height", "90px");
    let temp = ($(this).clone()).find('li:first-child').css("list-style", "none").text();
    // temp.appendTo(right);
    ($(this).clone()).find('li:first-child').css("list-style", "none").appendTo(right);
    for (var i = 0; i < posters.length; i++) {
      if(posters[i].title == temp){
        temp = posters[i];
        break;
      }
    }
    $('<img/>', {src : temp.pic}).css("width","200").appendTo(right);
  });
});
