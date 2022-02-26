

// prompt pwd length min 8, max 128 characters. 
function getInput() {
    let charLength = prompt("Please enter the character length from 8 to 128: ");
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

function charType() {
    // prompt lowercase? uppercase? numeric? and/or special characters?
    let lwCase = confirm("Do you want to generate lowercase?");
    let upCase = confirm("Do you want to generate uppercase?");
    let numeric = confirm("Do you want to generate numeric?");
    let spChar = confirm("Do you want to generate special character?");
    
    let charTypes = [];

    if (lwCase) {
        charTypes.push("lw");
    }

    if(upCase) {
        charTypes.push("up");
    }

    if(numeric) {
        charTypes.push("num");
    }

    if(spChar) {
        charTypes.push("sp");
    }

    // check for at least one character type is selected
    if(!charTypes.length) {
        window.alert("You need to choose at least one character type. Please select again");
        charType();
    }else {
        console.log("return random characters: " + charTypes);
        return charTypes;
    }
}



// generate password

// display password

function genPwd() {
    let alphabets =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let numbers = [1,2,3,4,5,6,7,8,9,0];
    let spChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "?"]

    checkInput();
    charType();

}