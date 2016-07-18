function randomColor() {
  return '#' + Math.random().toString(16).substr(-6);
};

$('.random-button').on('click', function() {
  $('body').css('background-color', (randomColor()));
  if (randomColor() === "#FFFFFF") {randomColor();}
});

$('.reset-button').on('click', function(){
  $('body').css('background-color', 'white');
});
