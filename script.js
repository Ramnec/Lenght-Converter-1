var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;


function myResult(){


// when we change the input and output type vale we need to updata the 
// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;


// now compare the input and resultType value and add formula

	if(option_from === "meter" && option_to==="feet"){
		//this is meter to kilometer formula 
		result.value = Number(input.value) * 3.28084;
	}else if(option_from === "meter" && option_to==="mile"){

		//this is meter to Centimeter formula 
		result.value = Number(input.value) * 0.000621;

	}else if(option_from === "meter" && option_to==="inch"){
		//this is meter to meter formula 
		result.value = Number(input.value) * 39.3701;
	}



	if(option_from === "kilometer" && option_to==="feet"){
		//this is kilometer to meter formula 
		result.value = Number(input.value) * 3280.84;
	}else if(option_from === "kilometer" && option_to==="mile"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 0.621371;
	}else if(option_from === "kilometer" && option_to==="inch"){
		//this is kilometer to kilometer formula 
		result.value = Number(input.value) * 39370.079;
	}

	if(option_from === "centimeter" && option_to==="feet"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 0.0328084;
	}else if(option_from === "centimeter" && option_to==="mile"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) / 160934;
	}else if(option_from === "centimeter" && option_to==="inch"){
		//this is Centimeter to Centimeter formula 
        result.value = Number(input.value) / 2.54;
	}
	





}
