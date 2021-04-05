function calculate() {
	
	var A = document.getElementById('one');
	var B = document.getElementById('two');
	var C = document.getElementById('three');
	var tbody2 = document.getElementById('tbody2');

	var D = Math.pow(B.value, 2) - (4 * A.value * C.value);
	if (D >= 0) {
		var X1 = (-(B.value) + Math.sqrt(D))/(2 * A.value);
		var X2 = (-(B.value) - Math.sqrt(D))/(2 * A.value);
	} else {
		X1 = "discriminant";
		X2 = " less than zero";
	}
	
	var tr = document.createElement('tr');

	tr.classList.add("highlight");

	tr.onclick = function() {
        this.parentNode.removeChild(tr);
    }

	tr.innerHTML = "<td>" + A.value + 
				   "</td><td>" + B.value + 
				   "</td><td>" + C.value + 
				   "</td><td>" + X1 + 
				   "</td><td>" + X2 + "</td>";
	tbody2.prepend(tr);
}

function handleChange(input) {
    if (input.value < -100) input.value = input.value.slice(0, 3);
    if (input.value > 100) input.value = input.value.slice(0, 2);
}