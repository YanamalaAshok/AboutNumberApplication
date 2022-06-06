let spinnerEl = document.getElementById("spinner");
let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");

function enterNumber(event) {
    if (event.key === "Enter") {
        let userInputVal = userInputEl.value;
        if (userInputVal === "") {
            alert("Enter a number");
            return;
        }
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;
        let options = {
            method: "GET"
        };
        spinnerEl.classList.toggle("d-none");
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerEl.classList.toggle("d-none");
                let {
                    fact
                } = jsonData;
                factEl.textContent = fact;
            });
    }
}

userInputEl.addEventListener("keyup", enterNumber);