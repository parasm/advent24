// Start of JS, goal to disable oncoming days and automatically unlock current days. took way too long to implement

var d = new Date();
var todaysDate = d.getDate();
var target = $('#calendar .week .day .date');

target.each(function(){
  var day = $(this).html();
  if (todaysDate == day) {
    $(this).addClass('today');
  }
  if (todaysDate < day){
    $(this).parent().addClass('future');
  }
  if (todaysDate >= day || todaysDate+1 == day){
    $(this).parent().addClass('past')
  }
});

// Day Handler 

$('.day').click(function(){
  if ($(this).hasClass('future')){
    $('#modal').addClass('active');
    $('#modal .wrapper .content .box').html("<h2>I expected you to be a good person with integrity, guess I was wrong, come back later</p>");
  }
  if ($(this).hasClass('past')){
    var content = $(this).children('.surprise').html();
    $('#modal').addClass('active');
    $('#modal .wrapper .content .box').html('');
    $('#modal .wrapper .content .box').html(content);
  }
})

// JS Stuff!

$('.close').click(function(){
  var ultimateParent = $(this).parent().parent().parent();
  ultimateParent.addClass('moveOut');
  setTimeout(function(){
    ultimateParent.removeClass('moveOut').removeClass('active');
  },250);
})

// snow that was unnecesarily hard to implement

$(document).snowfall({flakeCount : 100,collection : '.collectonme',  maxSpeed : 10});