// create function, variables, arrays, and code in-order to complete task
// Assignment code here

var enter;
var containNumber;
var containSpecial;
var containUpper;
var containLower;
var outcome; // name of the password combinations
var passwordOutcome; // ending password outcome

//values used for password
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
writePassword()
    function generatePassword() {

    

  enter = window.prompt("How long would you like your PASSWORD to be? Choose a number between 8 and 128"); 
    if (!enter) {
        window.alert("Please choose a length");
    } else if (enter < 8 || enter > 128) {
        enter = window.prompt("Choose a number between 8 and 128");

    } else {
        containNumber = window.confirm("PASSWORD contain number?");
        containSpecial = window.confirm("PASSWORD contain special characters?");
        containUpper = window.confirm("PASSWORD contain UPPER case letters?");
        containLower = window.confirm("PASSWORD contain LOWER case letters?");
    };

    if (!containNumber && !containSpecial && !containUpper && !containLower) {
        outcome = window.alert("Please choose a criteria for your PASSWORD");
    }

    else if (containNumber && containSpecial && containUpper && containLower) {
        outcome = number.concat(special, upper, lower);
    }
  
      // CHOOSE 3
    else if (containNumber && containSpecial && containUpper) {
        outcome = number.concat(special, upper);
    }

    else if (containNumber && containSpecial && containLower) {
        outcome = number.concat(special, lower);
    }

    else if (containSpecial && containUpper && containLower) {
        outcome = special.concat(upper, lower);
    }

    else if (containNumber && containUpper && containLower) {
        outcome = number.concat(upper, lower);
    }
      // CHOOSE 2
    else if (containNumber && containSpecial) {
        outcome = number.concat(special);
    }

    else if (containNumber && containUpper) {
        outcome = number.concat(upper);
    }

    else if (containNumber && containLower) {
        outcome = number.concat(lower);
    }

    else if (containSpecial && containUpper) {
        outcome = special.concat(upper);
    }

    else if (containSpecial && containLower) {
        outcome = special.concat(lower);
    }

    else if (containUpper && containLower) {
        outcome = upper.concat(lower);
    }

      // CHOOSE 1
    else if (confirmNumber) {
        outcome = number;
    }

    else if (confirmSpecial) {
        outcome = special;
    }

    else if (confirmUpper) {
        outcome = upper;
    }

    else if (confirmLower) {
        outcome = lower;
    };
    

    var passwordOutcome = "";

        // variable
     for (var i = 0; i < enter; i++) {
         passwordOutcome += outcome[Math.floor(Math.random() * outcome.length)];
         console.log(i);
    
        }

        return passwordOutcome;
    
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
