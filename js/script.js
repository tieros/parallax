// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }



// window.onload = function onLoad() {
//     var progressBar = 
//       new ProgressBar.Circle('#progress', {
//         color: 'red',
//         strokeWidth: 10,
//         duration: 2000, // milliseconds
//         easing: 'easeInOut'
//       });
  
//     progressBar.animate(0.63); // percent
//   };
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".menu").style.top = "0";
  } else {
    document.querySelector(".menu").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction () {
  document.querySelector("#myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.cozum-btn')) {
    var dropdowns = document.querySelector(".cozum-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// document.querySelector(".cozum-content").addEventListener('click',function(event){
//   event.stopPropagation();
// });


function myFunctionNavbar() {
  var x = document.querySelector(".menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}


var myCircle = Circles.create({
    id:                  'circles-1',
    radius:              60,
    value:               95,
    maxValue:            100,
    width:               5,
    text:                function(value){return value + '%';},
    colors:              ['#E0CBA8', '#028090'],
    duration:            1000,
    wrpClass:            'circles-wrp',
    textClass:           'circles-text',
    valueStrokeClass:    'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper:        true,
    styleText:           true
  });

  var myCircle = Circles.create({
    id:                  'circles-2',
    radius:              60,
    value:               90,
    maxValue:            100,
    width:               5,
    text:                function(value){return value + '%';},
    colors:              ['#E0CBA8', '#028090'],
    duration:            1000,
    wrpClass:            'circles-wrp',
    textClass:           'circles-text',
    valueStrokeClass:    'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper:        true,
    styleText:           true
  });
  var myCircle = Circles.create({
    id:                  'circles-3',
    radius:              60,
    value:               85,
    maxValue:            100,
    width:               5,
    text:                function(value){return value + '%';},
    colors:              ['#E0CBA8', '#028090'],
    duration:            1000,
    wrpClass:            'circles-wrp',
    textClass:           'circles-text',
    valueStrokeClass:    'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper:        true,
    styleText:           true
  });
  var myCircle = Circles.create({
    id:                  'circles-4',
    radius:              60,
    value:               73,
    maxValue:            100,
    width:               5,
    text:                function(value){return value + '%';},
    colors:              ['#E0CBA8', '#028090'],
    duration:            1000,
    wrpClass:            'circles-wrp',
    textClass:           'circles-text',
    valueStrokeClass:    'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper:        true,
    styleText:           true
  });
  