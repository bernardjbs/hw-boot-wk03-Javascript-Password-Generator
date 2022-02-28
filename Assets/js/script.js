let Password = {
    charLength: Number, 
    lw: Boolean,
    up: Boolean, 
    num: Boolean, 
    sp: Boolean, 
    chosenTypes: [],
    pwdString: String
}

// prompt pwd length min 8, max 128 characters. 
function getInput() {
    let charLength = prompt("Please enter the character length from 8 to 128: ");
    Password.charLength = charLength;
    return charLength;
}

function checkInput() {
    let input = getInput();
    if (input < 8 || input > 128) {
        window.alert("Wrong input: Please enter a number between 8 and 128");
        genPwd();
    }
    else if (isNaN(input)) {
        window.alert("Wrong input: Please enter a number between 8 and 128");
        genPwd();
    }
    else {
        console.log(input + ": the input is correct");
        return input;
    }
}

function randomItem(items) {
    return items[Math.floor(Math.random()*items.length)];
}

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

function genString() {
    let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let numbers = ["1","2","3","4","5","6","7","8","9","0"];
    let spChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "?"];
    let randomChosenTypes = []
    let pwdString = "";
    // console.log("initialized pwdString: " + pwdString);
    for(i=0; i<Password.charLength; i++){
        randomChosenTypes.push(randomItem(Password.chosenTypes));
    }

    for(i=0; i<randomChosenTypes.length; i++) {
        if(randomChosenTypes[i] == "lw") {
            pwdString = pwdString + randomItem(lowerCase);
           // console.log("give me a random lower case character: " + pwdString);
        }
        if(randomChosenTypes[i] == "up") {
            pwdString = pwdString + randomItem(upperCase);
            //console.log("give me a random upper case character: " + pwdString);
        }
        if(randomChosenTypes[i] == "num") {
            pwdString = pwdString + randomItem(numbers);
           // console.log("give me a random number: " + pwdString);
        }
        if(randomChosenTypes[i] == "sp") {
            pwdString = pwdString + randomItem(spChars);
           // console.log("give me a random special character: " + pwdString);
        }
    }

    for(i=0; i<Password.chosenTypes.length; i++) {
        if(!randomChosenTypes.includes(Password.chosenTypes[i])) {
            console.log("ERROR. CHAR TYPES MISSING IN PWD STRING - LOOP AGAIN");
            pwdString="";
            genString();
        }
        else {
            Password.pwdString = pwdString;
        }
    }
    // console.log("user chosen types: " + Password.chosenTypes);
    // console.log("random types: " + randomChosenTypes);
    // console.log("the password string is: " + Password.pwdString);
    return Password.pwdString;
}

function genPwd() {
    let charLength = checkInput();
    document.getElementById("pwd-display-text").innerHTML = pwdString(charLength);

}