(function() {
	'use strict';
	document.addEventListener('DOMContentLoaded', function(){
	});
})();

$(function(){
	'use strict';
	//menú fijo
window.onscroll = function() {myFunction()};

var header = document.getElementById("barra");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
});