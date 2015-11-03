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

document.addEventListener("dragover", function( event ) {
	event.preventDefault()
}, false);

document.addEventListener("drop", function( event ) {
	event.preventDefault();

	if ( event.target.className == "dropzone") {
		dragged.parentNode.removeChild( dragged );
		event.target.appendChild( dragged );
	}
}, false);

