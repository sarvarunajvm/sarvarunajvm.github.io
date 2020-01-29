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



// <!-- Just an image -->
// <!-- News jumbotron -->
// <div class="container hoverable p-4 my-5 red lighten-5 z-depth-3">

// <!-- Grid row -->
// <div class="row">

//   <!-- Grid column -->
//   <div class="view overlay">
//     <img src="resources/images/first.jpg" class="img-fluid" alt="">
//     <a href="#">
//       <div class="mask rgba-white-slight">
//         <div class="col-md-6 offset-md-5 py-5 my-5">
//           <!-- Content -->
//           <h1 class="f4 display-4 majorMono fontColorDark">OOP'S</h1>
//           <h2 id="changeText" class="majorMono brown-text"></h2>
//           <p class="lead majorMono brown-text">
//             Yup that's right am the person who fix the problem that you don't know you have,
//             in a way you don't understand .
//           </p>
//         </div>
//       </div>
//     </a>
//   </div>
//   <!-- Grid column -->

  


//   <!-- Grid column -->

// </div>
// <!-- Grid row -->

// </div>
// <!-- News jumbotron -->