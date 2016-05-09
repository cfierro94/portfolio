//change state of the questions (visible or not)
$('.question .q-toggle').on('click', function(e){
	e.preventDefault();
	$(this).parent().toggleClass('q-open');
})

/***********************************************
QUESTION 1	
***********************************************/
function setYearsOptions(){
	var start = new Date().getFullYear();
	var end = 1900;
	var options = "<option selected=\"selected\">" + start +"</option>";
	for(var year = start-1 ; year >= end; year--){
	  options += "<option>"+ year +"</option>";
	}
	document.getElementById("select-form-q1").innerHTML = options;
}
setYearsOptions();

function calculateAge(){
	console.log("hola");
	var e = document.getElementById("select-form-q1");
	var birthYear = e.options[e.selectedIndex].text;
	var today = new Date();
	var todayYear = today.getFullYear();
	var difference = todayYear - birthYear;
	document.getElementById("q1-answer").innerHTML = "You are either ".concat(difference," or ",difference-1);
}

/***********************************************
QUESTION 2
***********************************************/
function calculateSupply(){
	var info = document.getElementById("form-q2");
	var age = info.elements[0].value; //seguridad!!!
	var amountPerDay = info.elements[1].value;
	if(isNumber(age) && isNumber(amountPerDay)){
		var yearsLeft = 72 - age;
		var supply = amountPerDay*364.25*yearsLeft;
		document.getElementById("q2-answer").innerHTML = "You'll need ".concat(supply," to last you until the ripe old age of 72");
	}
	else{
		document.getElementById("q2-answer").innerHTML = "The input must be a number!";
	}
	
}

/***********************************************
QUESTION 3
***********************************************/
function calcCircumference(){
	var radius = document.getElementById("form-q3").elements[0].value;
	if(isNumber(radius)){
		var perimeter = 2*Math.PI*radius;
		document.getElementById("q3-answer").innerHTML = "The circumference is ".concat(perimeter.toFixed(4));
	}
	else{
		document.getElementById("q3-answer").innerHTML = "The input must be a number!";
	}
}

function calcArea(){
	var radius = document.getElementById("form-q3").elements[0].value;
	if(isNumber(radius)){
		var area = Math.PI*radius*radius;
		document.getElementById("q3-answer").innerHTML = "The area is ".concat(area.toFixed(4));
	}
	else{
		document.getElementById("q3-answer").innerHTML = "The input must be a number!";
	}
}
/***********************************************
QUESTION 4
***********************************************/
function converter(){
	var e = document.getElementById("form-q4");
	var grades = e.elements[0].value;
	if(!isNumber(grades)){
		document.getElementById("q4-answer").innerHTML = "The input must be a number!";
		return;
	}
	if(e.elements[1].value.charAt(4) == "C") {
		celsiusToFahrenheit(grades);
	}
	else {
		fahrenheitToCelsius(grades);
	}
}

function celsiusToFahrenheit(grades){
	var celsius = grades;
	grades = grades*9/5;
	grades += 32;
	document.getElementById("q4-answer").innerHTML = celsius.concat("&deg;C is ",grades.toFixed(3),"&deg;F");
}
function fahrenheitToCelsius(grades){
	var farenheit = grades;
	grades -= 32;
	grades *= 5/9;
	document.getElementById("q4-answer").innerHTML = farenheit.concat("&deg;F is ",grades.toFixed(3),"&deg;C");
}

/***********************************************
VERIFICATION
***********************************************/
function isNumber(x){
  if (isNaN(x)){
    return false;
  }
  return true;
}








