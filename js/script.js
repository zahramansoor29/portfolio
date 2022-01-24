

// check if page is fully loaded
window.onload = function() {

}
function change(){
	document.getElementById("text").innerHTML = "<br> <br><br>Zahra is an interdisciplinary creative <br> of Pakistani origin currently pursuing<br> a BFA at Parsons. She lives to <br> make  t h i n g s  that make you feel<br> what she feels.";
}

function changeTwo(){
	document.getElementById("text").innerHTML = "";
}

function changeThree(){
	document.getElementById("text").innerHTML = "<br><br><br>zahramansoor92@gmail.com <br> zahramansoor@newschool.edu<br><span><a href = 'https://www.instagram.com/zaalimart/' target= '_blank'>@zaalimart</a></span><br> +923352341555";
}


$(document).ready(function() {

	$("#work").click(function() {

		$("#innertv").animate({
        	opacity : "100%"
        }, 0 );

    });

    $("#me").click(function() {

		$("#innertv").animate({
        	opacity : "0%"
        }, 0 );

    });

    $("#contact").click(function() {

		$("#innertv").animate({
        	opacity : "0%"
        }, 0 );

    });




});
