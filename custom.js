/**
 * changes background color of element on mouse over
 **/
function mouseOver() {
	document.getElementById("mouse").style.backgroundColor = "blue";
}

/** changes background color of element on mouse out **/
function mouseOut() {
	document.getElementById("mouse").style.backgroundColor = "yellow";
}

/** adds drag & drop function **/

var dragged;

document.addEventListener("drag", function( event ) {

}, false);

document.addEventListener("dragstart", function( event ) {
	dragged = event.target
}, false);

