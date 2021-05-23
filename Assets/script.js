// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseLtrs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLtrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// var all = upperCaseLtrs.concat(lowerCaseLtrs, numbers, symbols);

function writePassword() {
  preventDefault
  var password = "";
  var wantUpperCase = true;
  var wantLowerCase = true;
  var wantNumbers = true;
  var wantSymbols = true;

  var length = prompt("How many characters do you want in your password?");
  if (length < 8 || length > 128) {
    alert("Password must be 8 to 128 characters long.")
    prompt("How many characters do you want in  your password?")
  }
  // wantUpperCase = confirm("Do you want lower case letters in your password?");

  if (wantUppercase === true) {
    confirm("Do you want lower case letters in your password?")
  }
  if (wantLowerCase === true) {
    confirm("Do you want numbers in your password?")
  }
  else if (wantNumbers === true) {
    confirm("Do you want symbols in your password?")
  }
  // else (wantSymbols === true){
  //   //  writePassword()
  // }

}


// var password = generatePassword();

var passwordText = document.querySelector("#password")

// if (length >= 8 || length <= 128 ) {

// }


passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

