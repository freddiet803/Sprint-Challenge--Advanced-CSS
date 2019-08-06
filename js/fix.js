// Get the header
var header = document.getElementById('myHeader');

// Get the offset position of the navbar
var sticky = header.offsetTop;
console.log(sticky + '  this is sticky');

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.onscroll = function() {
  myFunction();
};
//might have something to do with the mixin but makes no sense when run in console, offsetTop has null values
