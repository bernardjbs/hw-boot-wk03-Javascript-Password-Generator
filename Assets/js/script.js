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

function randomItem(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function pwdString(charLength) {
    let charTypes = [];
    console.log("the char length is : " + charLength);
    let lwCaseGen = confirm("Do you want to generate lowercase?");
    let upCaseGen = confirm("Do you want to generate uppercase?");
    let numGen = confirm("Do you want to generate numeric?");
    let spCharGen = confirm("Do you want to generate special character?");
    if (lwCaseGen) {
        charTypes.push("lw");
    }

    if(upCaseGen) {
        charTypes.push("up");
    }

    if(numGen) {
        charTypes.push("num");
    }

    if(spCharGen) {
        charTypes.push("sp");
    }

    // check for at least one character type is selected
    if(!charTypes.length) {
        window.alert("You need to choose at least one character type. Please select again");
        pwdString(charLength);
    }else {
        //console.log("return random characters: " + charTypes);
        console.log("The char types are: " + charTypes);

        let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        let numbers = ["1","2","3","4","5","6","7","8","9","0"];
        let spChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "?"];
        
        let pwdString = "";
    
        for(i=0; i<charLength; i++) {
            let randomType = randomItem(charTypes);
            console.log("random type: " + randomType);
    
            if(randomType == "lw") {
                pwdString = pwdString + randomItem(lowerCase);
                console.log("give me a random lower case character: " + pwdString);
            }
            else if(randomType == "up") {
                pwdString = pwdString + randomItem(upperCase)
                console.log("give me a random upper case character: " + pwdString);
            } 
            else if(randomType == "num") {
                pwdString = pwdString + randomItem(numbers)
                console.log("give me a random number: " + pwdString);
            }
            else {
                pwdString = pwdString + randomItem(spChars)
                console.log("give me a random special character: " + pwdString);
            }   
        }
    }
}

function genPwd() {
    let charLength = checkInput();
    pwdString(charLength);
}