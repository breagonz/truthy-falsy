function checkValue() {
	// Get the input value
	var value = document.getElementById("input").value;
	
	// TODO: Check if the value is truthy or falsy
	if ( value == "false" || value === "" || value == "null" || value == "NaN" || value == 0 || value == "undefined"){
		document.getElementById("result").innerHTML = value + " is falsy!";
        document.getElementById("result").style.color = "red"
    } else {
		document.getElementById("result").innerHTML = value + " is truthy!";
	}
}
