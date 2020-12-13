/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria */
//onClick prompt()

/* WHEN prompted for password criteria
THEN I select which criteria to include in the password */

/* WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters */
//var characterLength


/* WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters */
//var lowercase
//var uppercase
//var numeric
//var specialChar

/* WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected */

/* WHEN all prompts are answered
THEN a password is generated that matches the selected criteria */

/* WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */

//function begin() {
 //   var message;
 //   var characterLength = prompt("Password must be between 8 and 128 characters. Enter desired length of password.");
//    if (characterLength >= 8) {
 //       prompt("Do you want lowercase characters?");
 //   } else {
 //       prompt("Please enter a value between 8 and 128.");
 //   } console.log(characterLength);
//}

// DOM elements


const randomFunctions = {
    lowercase: getLowercase,
    uppercase: getUppercase,
    number: getRandomNumber,
    specialCharacter: getSpecialChar,
}

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

console.log(getSpecialChar());


