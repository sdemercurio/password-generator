
// Set variables

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numeric = "0123456789";
let specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let allChars = [];

// function Password Generation

function generatePass(){
    let allChars = [];
    let securePass = "";


let Passlength = prompt("Your password nneds to be between 8 and 128 characters long. How many characters would you like your password to be?");

if(Passlength < 8 || Passlength > 128){
    alert("Your password nneds to be between 8 and 128 characters long. How many characters would you like your password to be?");
}

// Confirm the rest of character conditions

else{
    if(confirm("Would you like your password to contain upper case letters?")){
        Array.prototype.push.apply(allChars, [uppercase]);
    }

    if(confirm("Would you like your password to contain lower case letters?")){
        Array.prototype.push.apply(allChars, [lowercase]);
    }

    if(confirm("Would you like your password to contain numbers?")){
        Array.prototype.push.apply(allChars, [numeric]);
    }

    if(confirm("Would you like your password to contain symbols?")){
        Array.prototype.push.apply(allChars, [specialChar]);
    }

    if(allChars.length===0){
        alert("It is recommended you select at least 3 types of character to generate a secure password. Please start over.");
    }

// For loop to uses confirmed information and generates password

    else{
        for(var i=0; i < Passlength; i++){
            var random = Math.floor(Math.random()*allChars.length);
            securePass += allChars[random];
        }
    }
}
    

// Displayed result

    document.getElementById("password").innerHTML = securePass;

}
