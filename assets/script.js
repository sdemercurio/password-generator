var lowercase;
var uppercase;
var numeric;
var specialChar;

/* Functions for generating random letters, numbers, and characters referencing 
a character set.
http://www.net-comber.com/charset.html */

// To generate random lowercase letters. 

function getLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// To generate random uppercase letters. 
function getUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// To generate random numbers. 
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// To generate random special characters. 
function getSpecialChar() {
    const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//function to generate a random password

function generate() {
    var confirmLength = '';
//asking user to input desired character length
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");
        if (confirmLength === null) {
            break;
        }
    }
//getting user input for which character types to use for the password
    if (confirmLength) {
        if (confirm("Would you like to use lowercase characters?") == true) {
            lowerSelection = true
        } 

        if (confirm("Would you like to use uppercase characters?") == true) {
            upperSelection = true
        }

        if (confirm("Would you like to use special characters?") == true) {
            specialSelection = true
        }

        if (confirm("Would you like to use numerical characters?") == true) {
            numberSelection = true
        }
//if none of the character types are selected, alerts the user to choose at least one
        if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
            alert("At least one character type must be selected")
        }
    }

