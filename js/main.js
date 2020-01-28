$(document).ready(() => {
  $('#splash').modal('show');
  setTimeout(() => {
    $('#splash').modal('hide');
  }, 10000);
});

const text = ["Am a Java Developer.", "Maybe FrontEnd Developer.","No Full Stack Developer."];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 4000);

function change() {
  elem.innerHTML = text[counter];
  let textFade = [
  { opacity: '0'}, { opacity: '1'}
  ]
  let textTiming = {
    duration: 3000,
    iterations: Infinity
  }
  elem.animate(textFade,textTiming)
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
$('[data-curtain-menu-button]').click(function(){
  $('body').toggleClass('curtain-menu-open');
})
