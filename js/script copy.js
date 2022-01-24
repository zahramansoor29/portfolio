

// check if page is fully loaded
window.onload = function() {

}
function change(){
	document.getElementById("text").innerHTML = "<br> <br>Zahra is an interdisciplinary creative <br>currently pursuing a BFA at Parsons<br> Paris. She doesn’t ‘age’, doesn’t <br> belong to anyone, and is always going <br>to be a student. She lives to <br> make  t h i n g s  that make you feel<br> what she feels.";
}


function changeThree(){
	document.getElementById("text").innerHTML = "<br><br><br>zahramansoor92@gmail.com <br> mansz807@newschool.edu<br><span><a href = 'https://www.instagram.com/zaalimart/' target= '_blank'>@zaalimart</a></span><br> +923352341555";
}


$(document).ready(function() {

	$("#work").click(function() {

		$("#innertv").animate({
        	opacity : "100%"
        }, 0 );

        //$("#innertv").animate({
        	width : "723px",
        	height: "437px",
        	top: "160px",
        	left: "423px"

        }, 1200 );

        $(".tv").animate({
        	width : "700px"
        //}, 1200 );
	
    });





});
