// Password Object
let Password = {
    charLength: Number, 
    chosenTypes: [],
    pwdString: String
}

// function to randomize items
function randomItem(items) {
    return items[Math.floor(Math.random()*items.length)];
}

// function to prompt password length min 8, max 128 characters. 
function getInput() {
    let charLength = prompt("Please enter the character length from 8 to 128: ");
    Password.charLength = charLength;
    return charLength;
}

// function to validate the input for the number of characters
function checkInput() {
    let input = getInput();
    if (input < 8 || input > 128) {
        window.alert("Wrong input: Please enter a number between 8 and 128");
        checkInput();
    }
    else if (isNaN(input)) {
        window.alert("Wrong input: Please enter a number between 8 and 128");
        checkInput();
    }
    else {
        return input;
    }
}

// function to confirm character types, push them into an array and check if at least one character type is selected
function pwdString(charLength) {
    let lwCaseGen = confirm("Do you want to generate lowercase?");
    let upCaseGen = confirm("Do you want to generate uppercase?");
    let numGen = confirm("Do you want to generate numeric?");
    let spCharGen = confirm("Do you want to generate special character?");
    Password.chosenTypes = [];

    if(lwCaseGen) {
        Password.chosenTypes.push("lw");
    }

    if(upCaseGen) {
        Password.chosenTypes.push("up");
    }
    if(numGen) {
        Password.chosenTypes.push("num");
    }
    if(spCharGen) {
        Password.chosenTypes.push("sp");
    }

    if(!lwCaseGen && !upCaseGen && !numGen && !spCharGen) {
        window.alert("You need to choose at least one character type. Please select again");
        pwdString(Password.charLength);
    } 

    genString();
    return Password.pwdString;
}

// function to generate the password string
function genString() {
    let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let numbers = ["1","2","3","4","5","6","7","8","9","0"];
    let spChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "?"];
    let randomChosenTypes = []
    let pwdString = "";
    for(i=0; i<Password.charLength; i++){
        randomChosenTypes.push(randomItem(Password.chosenTypes));
    }

    for(i=0; i<randomChosenTypes.length; i++) {
        if(randomChosenTypes[i] == "lw") {
            pwdString = pwdString + randomItem(lowerCase);
        }
        if(randomChosenTypes[i] == "up") {
            pwdString = pwdString + randomItem(upperCase);
        }
        if(randomChosenTypes[i] == "num") {
            pwdString = pwdString + randomItem(numbers);
        }
        if(randomChosenTypes[i] == "sp") {
            pwdString = pwdString + randomItem(spChars);
        }
    }

    for(i=0; i<Password.chosenTypes.length; i++) {
        if(!randomChosenTypes.includes(Password.chosenTypes[i])) {
            pwdString="";
            genString();
        }
        else {
            Password.pwdString = pwdString;
        }
    }
  return Password.pwdString;
}

// function to set the style through DOM
function domStyle() {
    let pwdContainer = document.querySelector("#pwd-container");
    let pwdDisplay = document.querySelector("#pwd-display");
    let pwdText = document.querySelector("#pwd-display-text");
    let pwdStatus = document.querySelector("#pwd-status-0");

    pwdContainer.addEventListener("click", function(event) {
        var element = event.target
        if(element.matches(".btn-gen-pwd")) {
            console.log("the gen pwd button is pressed");
            pwdDisplay.setAttribute("id", "pwd-border");  
            pwdText.setAttribute("id", "change-pwd-text-color"); 
            pwdStatus.setAttribute("id", "pwd-status-1");
            pwdStatus.textContent = "Your Password: ";
        }
        else if(element.matches(".btn-reset")) {
            pwdDisplay.setAttribute("id", "pwd-display")
            pwdText.setAttribute("id", "pwd-display-text");
            pwdText.textContent = "Your secure password"
            pwdStatus.setAttribute("id", "pwd-status-0");
            pwdStatus.textContent = "Generate a Password";
        }
    })
}

// main function to generate the password
function genPwd() {
    let charLength = checkInput();
    document.querySelector(".pwd-string").innerHTML = pwdString(charLength);
    domStyle();
}