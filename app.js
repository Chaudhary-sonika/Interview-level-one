var inputTxt = document.querySelector("#inp");
var btnCheck = document.querySelector("#check");
var output = document.querySelector("#output");


const obj = {
	name: "John",
	age: 20,
	favColour: "red"
}

function checkInputData() {
    var iptxt = inputTxt.value; 
    if(obj.name.toLowerCase() === iptxt.toLowerCase()) {
output.innerText = "user is found";
    } else {
        output.innerText = " user is not found";
    }
}
btnCheck.addEventListener("click", checkInputData);